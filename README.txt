Project Link: https://expo.io/@jgarc659/projects/MobileDevProject

Project Group 14
Team Members: Adrian Palomares, Audelia Valdovinoz, Rawad Moussa, Javier Garcia

The flow of the app is as follows:
- The app itself can be summarized as a Stack Navigator with 3 screens within.
- On startup, users are greeted with a 3 second splash screen showing our custom-made app logo.
- The first screen users see is the Home screen. It features a brief, muted video of food stock 
footage that loops repeatedly. The "Nutrition App" title is shown, and below it is a "LOGIN" button,
which takes users to the 2nd (Menu) screen.
- On the Menu screen, users see a TextInput search box, under which is a SectionList of 5 food categories.
Each category has 5 items, for a total of 25 items. As text is entered into the search box, the SectionList
immediately renders a list of results.
- Users may press on any item in the SectionList of the Menu screen to go to the 3rd (FoodInfo) screen.
- On the FoodInfo screen, users see an image of the food item, under which there is additional info.
- Information on the FoodInfo screen includes calories, fat, carbs, sugar, and sodium values.
- The state of the search query and result list are maintained, and users may traverse back and forth between screens without issue.