# Arigato
### By Anthony Krivonos and Jeremy De La Cruz

**Cross-platform mobile application that transforms spoken word into contact information that is easily saved onto the user's phone.**

##Features:
1. All parsing is done by the **Parsergato** web server. It's currently hosted on *Heroku.com* at `https://herokuapp.parsergato.com/`.
2. Authentication for the server is **token-based**, and every app initialization will generate a new JSON web token.
3. Speech recognition is fully integrated for both **iPhone** and **Android**, as well as the ability to add contacts to the phone's memory.
4. User avatars can be taken using the **built-in camera** and saved in the phone's memory as well.
5. Contacts are easily **sortable**, **deletable**, and **editable**.


##Download:
1. Clone this repository.
2. `cd` to the project folder.
3. Run `npm run build-ios` to build for iOS and `npm run build-android` to build for Android.
4. Run `npm run run-ios` to emulate in Xcode and `npm run run-android` to emulate on Android SDK.
