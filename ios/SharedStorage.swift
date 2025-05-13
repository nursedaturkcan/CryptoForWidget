import Foundation
import WidgetKit

@objc(SharedStorage)
class SharedStorage: NSObject {
  
  @objc
  func saveFavoriteCoins(_ json: String) {
      print("💾 SharedStorage'a gelen veri:", json)

      if let userDefaults = UserDefaults(suiteName: "group.com.crypto.cryptowidget"),
         let data = json.data(using: .utf8) {
          userDefaults.set(data, forKey: "favoriteCoins") 
          userDefaults.synchronize()
          print("🟩 UserDefaults'a kaydedilen veri:", json)
          WidgetCenter.shared.reloadAllTimelines()
          print("🟩 Widget güncellendi!")
      } else {
          print("🟥 App Group adı yanlış!")
      }
  }


  
  @objc
  func reloadWidget() {
    WidgetCenter.shared.reloadAllTimelines()
  }
}
