# Wallpaper Gallery

A private Flutter application for personal use that allows browsing, downloading, and setting beautiful wallpapers from various sources, including Bing's daily wallpapers.

## Features

- Browse wallpapers from multiple sources
- Download wallpapers to your device
- Set wallpapers as your home/lock screen
- Favorite wallpapers for quick access
- Dark/Light theme support
- Offline access to downloaded wallpapers
- Classic Bing wallpapers collection

## Note

This is a private project and is not intended for public use or distribution. All rights reserved.

# Wallpaper Gallery App

## Play Store Release Documentation

### Release Requirements

1. **App Bundle Location**
   - Main app bundle: `build/app/outputs/bundle/release/app-release.aab`
   - Debug symbols: `build/app/outputs/symbols/`

2. **Signing Configuration**
   - Keystore file: `android/app/keystore/upload-keystore.jks`
   - Keystore type: PKCS12
   - Key alias: upload
   - Key validity: Until Aug 21, 2052
   - SHA-1: 0A:4D:91:3C:AD:A7:EC:99:BB:28:E3:6D:FD:3F:0A:D7:B2:38:8A:7D
   - SHA-256: EC:E4:CB:DD:DA:D2:2C:62:87:43:F8:36:0E:1E:EF:A5:0B:C0:B2:3E:87:CC:B4:F5:6A:84:E1:24:4B:58:4F:2D

3. **Build Configuration**
   - Java version: 21
   - Gradle version: 8.6
   - Android Gradle Plugin: 8.2.2
   - Kotlin version: 1.9.22

### Play Store Release Steps

1. **Prepare Release**
   ```bash
   flutter clean
   flutter build appbundle --obfuscate --split-debug-info=build/app/outputs/symbols
   ```

2. **Upload to Play Store**
   - Upload the app bundle from `build/app/outputs/bundle/release/app-release.aab`
   - Upload debug symbols from `build/app/outputs/symbols/`
   - Ensure the release notes are updated
   - Verify the app signing is using the correct keystore

3. **Release Checklist**
   - [ ] App bundle is signed with the correct keystore
   - [ ] Debug symbols are uploaded
   - [ ] Release notes are updated
   - [ ] App version is incremented
   - [ ] All permissions are properly declared
   - [ ] Privacy policy is up to date
   - [ ] Content rating is accurate
   - [ ] App is tested on multiple devices

### Troubleshooting

1. **Upgrade Path Issues**
   - Ensure the app bundle is signed with the same keystore as the previous release
   - Verify the package name matches the existing app
   - Check that the version code is higher than the previous release
   - Solution: We resolved this by:
     - Using the correct PKCS12 keystore format
     - Explicitly setting storeType in build.gradle
     - Ensuring v1 and v2 signing are enabled
     - Using Java 21 for compatibility

2. **Debug Symbols**
   - Debug symbols are generated during the build process
   - Upload the symbols file to the Play Console for better crash reporting
   - Solution: We resolved this by:
     - Adding `--split-debug-info=build/app/outputs/symbols` to the build command
     - Configuring `debugSymbolLevel 'FULL'` in build.gradle
     - Ensuring the symbols directory is uploaded to Play Console

3. **Common Issues**
   - If users can't upgrade, verify the signing key matches the previous release
   - For ANR/crash analysis, ensure debug symbols are uploaded
   - For size issues, check the app bundle size and optimize if necessary

### Security Notes

1. **Keystore Security**
   - Keep the keystore file secure
   - Back up the keystore file and passwords
   - Never commit the keystore to version control
   - Store keystore passwords securely

2. **App Signing**
   - The app is signed with a release keystore
   - Debug builds use a different keystore
   - Play Store uses app signing by Google Play

### Version Information

- Current version: 1.0.10+11
- Previous Play Store version: 1.0.9
- Minimum SDK: 23
- Target SDK: 34
- Compile SDK: 34

### Dependencies

Key dependencies are listed in `pubspec.yaml`. Make sure to update them regularly and check for compatibility issues.

### Support

For any issues with the release process, contact the development team or refer to the [Flutter documentation](https://flutter.dev/docs) and [Google Play Console Help](https://support.google.com/googleplay/android-developer).

### Recent Fixes and Improvements

1. **Keystore Configuration**
   - Updated keystore format to PKCS12
   - Explicitly set storeType in build.gradle
   - Enabled v1 and v2 signing
   - Configured proper Java version (21)

2. **Debug Symbols**
   - Implemented proper debug symbol generation
   - Added configuration for full debug symbol level
   - Ensured symbols are properly packaged with the app bundle

3. **Build Configuration**
   - Updated Java version to 21
   - Configured proper Gradle settings
   - Implemented proper signing configuration
   - Added obfuscation for better security

4. **Version Management**
   - Implemented proper version code incrementing
   - Ensured version name follows semantic versioning
   - Maintained version history in documentation
