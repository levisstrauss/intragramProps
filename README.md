------------- Instagram clone with React Native ------------------

---------- Create react native project ---------->

    - npx react-native init instagramClone
    - npm start --reset-cache : to reset cache
    - react-native run-android : to run the app on android device
    - react-native run-ios : to run the app on ios device
    - npx pod-install ios : to install pods on ios device

---------- Project folder structures ---------->

     - Project Structure
       - src
          |_assets--fonts--images
          |_components
          |_screens 
          |_theme

---------- React Vectors Icons ---------->

    Documentation: https://github.com/oblador/react-native-vector-icons
    Website: https://oblador.github.io/react-native-vector-icons/
    Installation: npm install react-native-vector-icons 
    Types: npm install --save-dev @types/react-native-vector-icons

    ----------- Configuration: --------

    - IOS => Copy paste the array of fonts in info.plist file
          => IOS => Name => Paste the array before closing the dictionary
    - Android => android/app/build.gradle (NOT android/build.gradle) and add:
          => apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

    NB: Don't forget to run npx pod-install ios after installing the package

    ------------- Usage: ---------------
    
    - import Icon from 'react-native-vector-icons/FontAwesome';
    - <Icon name="rocket" size={30} color="#900" />

---------- React Native Video ---------->

    Documentation: https://github.com/react-native-video/react-native-video
    Website: https://reactnativeexample.com/a-react-native-video-player-with-a-few-controls/
    Installation: npm install react-native-video react-native-vector-icons
    Types: npm install --save-dev @types/react-native-video
    
    NB: Don't forget to run npx pod-install ios after installing the package
        In case you run into a problem, check this website
        https://github.com/react-native-video/react-native-video/issues/2468

