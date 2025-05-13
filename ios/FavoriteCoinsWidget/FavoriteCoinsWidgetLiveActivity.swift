//
//  FavoriteCoinsWidgetLiveActivity.swift
//  FavoriteCoinsWidget
//
//  Created by Nurseda Ozcan on 5.05.2025.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct FavoriteCoinsWidgetAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct FavoriteCoinsWidgetLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: FavoriteCoinsWidgetAttributes.self) { context in
            // Lock screen/banner UI goes here
            VStack {
                Text("Hello \(context.state.emoji)")
            }
            .activityBackgroundTint(Color.cyan)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {
                    Text("Leading")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("Trailing")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Bottom \(context.state.emoji)")
                    // more content
                }
            } compactLeading: {
                Text("L")
            } compactTrailing: {
                Text("T \(context.state.emoji)")
            } minimal: {
                Text(context.state.emoji)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

extension FavoriteCoinsWidgetAttributes {
    fileprivate static var preview: FavoriteCoinsWidgetAttributes {
        FavoriteCoinsWidgetAttributes(name: "World")
    }
}

extension FavoriteCoinsWidgetAttributes.ContentState {
    fileprivate static var smiley: FavoriteCoinsWidgetAttributes.ContentState {
        FavoriteCoinsWidgetAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: FavoriteCoinsWidgetAttributes.ContentState {
         FavoriteCoinsWidgetAttributes.ContentState(emoji: "🤩")
     }
}

#Preview("Notification", as: .content, using: FavoriteCoinsWidgetAttributes.preview) {
   FavoriteCoinsWidgetLiveActivity()
} contentStates: {
    FavoriteCoinsWidgetAttributes.ContentState.smiley
    FavoriteCoinsWidgetAttributes.ContentState.starEyes
}
