import requests
from bs4 import BeautifulSoup
import re
import json

def fetch_user_data(user_id):
    url = f"https://leetcode.com/{user_id}"
    r = requests.get(url)
    if r.status_code == 200:
        html_content = r.text
        return html_content
    else:
        return None

# Function to extract the "userContestRanking" section
def extract_user_contest_ranking(text):
    match = re.search(r'"userContestRanking":\s*({[^}]+})', text)
    if match:
        user_contest_ranking_data = match.group(1)
        return user_contest_ranking_data
    return None

# Function to extract the "languageProblemCount" data
def extract_language_problem_count(text):
    match = re.search(r'"languageProblemCount":\s*(\[.*?\])', text)
    if match:
        language_problem_count_data = match.group(1)
        return language_problem_count_data
    return None

# Input user ID from the user
user_id = input("Enter the LeetCode user ID: ")
html_content = fetch_user_data(user_id)

total_problems_solved = 0

if html_content:
    # Parse the HTML content
    soup = BeautifulSoup(html_content, "html.parser")

    # Find all script tags
    script_tags = soup.find_all("script")

    # Search for userContestRanking and extract data
    user_contest_ranking_data_found = False
    for script_tag in script_tags:
        script_text = script_tag.string

        if script_text and "userContestRanking" in script_text:
            user_contest_ranking_data = extract_user_contest_ranking(script_text)

            if user_contest_ranking_data:
                # Parse JSON and format it
                user_contest_ranking_data = json.loads(user_contest_ranking_data)
                user_contest_ranking_data_found = True
                break  # Stop searching after finding the data

    # Search for languageProblemCount and extract data
    language_problem_count_data_found = False
    for script_tag in script_tags:
        script_text = script_tag.string

        if script_text and "languageProblemCount" in script_text:
            language_problem_count_data = extract_language_problem_count(script_text)

            if language_problem_count_data:
                # Parse JSON and format it
                language_problem_count_data = json.loads(language_problem_count_data)
                language_problem_count_data_found = True
                break  # Stop searching after finding the data

    if not user_contest_ranking_data_found and not language_problem_count_data_found:
        print("No relevant data found on the user's profile.")
    else:
        if language_problem_count_data_found:
            total_problems_solved = sum(item['problemsSolved'] for item in language_problem_count_data)

        print("User Contest Ranking Data:")
        print(json.dumps(user_contest_ranking_data, indent=4))

        if language_problem_count_data_found:
            print("\nLanguage Problem Count Data:")
            for item in language_problem_count_data:
                print(f"Language: {item['languageName']}, Problems Solved: {item['problemsSolved']}")
            print(f"Total Problems Solved: {total_problems_solved}")
else:
    print(f"Failed to fetch data for user {user_id}. Please check if the user ID is correct.")

if not user_contest_ranking_data_found:
    print("The user is not active on LeetCode now.")
