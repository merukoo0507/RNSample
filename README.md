# RNSample

### Environment
 - 安裝nodejs: https://nodejs.org/en/
 - 安裝watchman
    ```npm install watchman -g```
 - 安裝flow
    ```npm install flow -g```
 - ```npm install -g react-native-cli```
 - 安裝Android Studio
 - 安装 Android SDK
 - 設定環境變數:
    - "C:\Program Files\Java\jdk1.8.0_171"
    - "C:\Program Files\Java\jdk1.8.0_171\lib"  
    - "C:\Users\username\AppData\Local\Android\Sdk"
    - "C:\Users\username\AppData\Local\Android\Sdk\build-tools"
    - "C:\Users\username\AppData\Roaming\npm"
 - 建立新專案
    ```react-native init AwesomeProject```
 - 開啟模擬器
 - 用Android Studio 執行一次android project
 - ```npm start```
 - install TypeScript
    ```npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer```
 - 
	
	
#### Condictions
 - React Native: Emulator stuck on “loading from localhost:8081..”
	- https://stackoverflow.com/questions/50226232/react-native-emulator-stuck-on-loading-from-localhost8081
	```adb reverse --list```
	```adb reverse tcp:8081 tcp:8081```
 - 
 

#### Navigation