## Purpose
The purpose of this application is to help Dead by Daylight players track the builds they use and log match results in an organized way. Instead of relying on memory, users can save perk combinations and record how their matches go over time. The app allows players to analyze which builds perform best against specific killers or in certain situations.

---

## Intended Users
This application is designed for Dead by Daylight players who want to track performance, experiment with different builds, and review match outcomes. It is useful for both casual and competitive players looking to improve their gameplay.

---

## Main Entities
- Users  
- Builds  
- Match Logs  

*(For this version of the project, the primary focus is on Builds and Match Logs.)*

---

## Key Features / User Actions
- Users can register for an account  
- Users can log in to their account  
- Users can create, view, edit, and delete saved builds  
- Users can create, view, edit, and delete match logs  
- Users can search their match history by killer name, map, result, or notes  

### Match Filtering Options
- Role (Survivor or Killer)  
- As / Against (Played as killer or faced a killer)  

### Match Log Details
Each match log can include:
- Role played  
- Killer name  
- Match result  
- Notes  

---

## Current Implementation
- Static frontend built using HTML and CSS  
- Structured dashboard layout with forms and match history  
- Navigation system between register, login, and dashboard pages  
- Styled using Flexbox and CSS Grid  
- Placeholder system for builds, perks, and match logs  

---

## Potential Future Improvements
- Display official perk and add-on icons  
- Store perk descriptions in a database  
- Allow users to select perks from a predefined list  
- Add statistical analysis (win rate per killer, best-performing build, etc.)  
- Implement advanced search and filtering using database queries  
- Add hover-based perk descriptions and interactive UI elements  

---

## Technologies Used
- HTML  
- CSS  
- Git & GitHub  

---

## Author
Sean Wilk

---

## Business Rules Screenshot
![Business Rules](images/business_rules.png)

---

## Entity Relationship Diagram (ERD)
![ERD](images/erd.png)