import WidgetKit
import SwiftUI

struct FavoriteCoin: Identifiable, Codable {
    let id = UUID()
    let name: String
    let price: String
  let changePercent: String
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let coins: [FavoriteCoin]
}

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), coins: sampleCoins())
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        print("🟩 getSnapshot tetiklendi!")
        let entry = SimpleEntry(date: Date(), coins: loadCoins())
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<SimpleEntry>) -> ()) {
        print("🟩 getTimeline tetiklendi!")
        let entry = SimpleEntry(date: Date(), coins: loadCoins())
        let timeline = Timeline(entries: [entry], policy: .after(Date().addingTimeInterval(300)))
        completion(timeline)
    }

    func loadCoins() -> [FavoriteCoin] {
        let suite = "group.com.crypto.cryptowidget"
        let key = "favoriteCoins"
        
        // App Group kullanarak UserDefaults erişimi
        guard let defaults = UserDefaults(suiteName: suite) else {
            print("🟥 suiteName yanlış veya nil: \(suite)")
            return sampleCoins() // Yedek veri
        }

        // Kaydedilen veriyi alıyoruz
        guard let data = defaults.data(forKey: key) else {
            print("🟥 UserDefaults'ta '\(key)' bulunamadı.")
            return sampleCoins() // Yedek veri
        }

        do {
            // JSON'dan veri modeline dönüştürülüyor
            let decoded = try JSONDecoder().decode([FavoriteCoin].self, from: data)
            print("🟩 Widget'tan alınan veri: \(decoded)")
            return decoded
        } catch {
            print("🟥 Decode hatası: \(error.localizedDescription)")
            print("🟥 Gelen veri (raw): \(String(data: data, encoding: .utf8) ?? "yok")")
            return sampleCoins() // Yedek veri
        }
    }

    func sampleCoins() -> [FavoriteCoin] {
        return [
          FavoriteCoin(name: "BTC", price: "$60,000",changePercent: "10"),
            FavoriteCoin(name: "ETH", price: "$3,000",changePercent: "10"),
            FavoriteCoin(name: "SOL", price: "$140",changePercent: "10"),
            FavoriteCoin(name: "ADA", price: "$0.35",changePercent: "10"),
            FavoriteCoin(name: "AVAX", price: "$35",changePercent: "10"),
            FavoriteCoin(name: "DOT", price: "$5.5",changePercent: "10")
        ]
    }
}


struct FavoriteCoinsWidgetEntryView: View {
    var entry: SimpleEntry
    @Environment(\.widgetFamily) var family

    var body: some View {
        ZStack {
            Color.black

            VStack(alignment: .leading, spacing: 8) {
                let coinCount = getCoinCount(for: family)
                ForEach(entry.coins.prefix(coinCount)) { coin in
                    HStack {
                        VStack(alignment: .leading) {
                            Text(coin.name)
                                .foregroundColor(.white)
                                .font(nameFont)
                                .lineLimit(1)
                                .minimumScaleFactor(0.5)
                            Text(formattedPrice(for: coin.price))
                                .foregroundColor(.white)
                                .font(priceFont)
                                .lineLimit(1)
                                .minimumScaleFactor(0.5)
                        }
                        Spacer()
                        Text(formattedChangePercent(for: coin.changePercent))
                            .font(percentFont)
                            .padding(.vertical, 2)
                            .padding(.horizontal, 8)
                            .background(changeColor(for: coin.changePercent))
                            .foregroundColor(.white)
                            .cornerRadius(5)
                            .lineLimit(1) 
                            .minimumScaleFactor(0.5)
                    }
                }
            }
            .padding()
            .containerBackground(.black, for: .widget)
        }
    }

    // MARK: - Font Boyutları
    var nameFont: Font {
        switch family {
        case .systemSmall: return .system(size: 12, weight: .bold)
        default: return .system(size: 14, weight: .bold)
        }
    }

    var priceFont: Font {
        switch family {
        case .systemSmall: return .system(size: 10)
        default: return .system(size: 12)
        }
    }

    var percentFont: Font {
        switch family {
        case .systemSmall: return .system(size: 10, weight: .bold)
        default: return .system(size: 12, weight: .bold)
        }
    }

    // MARK: - Fonksiyonlar
    func getCoinCount(for family: WidgetFamily) -> Int {
        switch family {
        case .systemSmall: return 2
        case .systemMedium: return 4
        case .systemLarge: return 6
        default: return 2
        }
    }

    func changeColor(for percent: String) -> Color {
        if let value = Double(percent) {
            return value >= 0 ? .green : .red
        }
        return .gray
    }

    // `price` formatlama (noktadan sonra 6 haneli)
    func formattedPrice(for price: String) -> String {
        if let value = Double(price.trimmingCharacters(in: .symbols)) {
            let formatted = String(format: "$%.6f", value)
            return formatted
        }
        return price
    }

    // `changePercent` formatlama (noktadan sonra 1 haneli)
    func formattedChangePercent(for changePercent: String) -> String {
        if let value = Double(changePercent) {
            let formatted = String(format: "%.1f%%", value)
            return formatted
        }
        return changePercent
    }
}



struct FavoriteCoinsWidget: Widget {
    let kind: String = "FavoriteCoinsWidget"

    var body: some WidgetConfiguration {
      StaticConfiguration(kind: kind, provider: Provider()) { entry in
          FavoriteCoinsWidgetEntryView(entry: entry)
      }

        .configurationDisplayName("Favorite Coins")
        .description("See your favorite coins at a glance.")
        .supportedFamilies([.systemSmall, .systemMedium, .systemLarge])
    }
}
