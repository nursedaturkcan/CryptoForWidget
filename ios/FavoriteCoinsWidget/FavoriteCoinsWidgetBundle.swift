//
//  FavoriteCoinsWidgetBundle.swift
//  FavoriteCoinsWidget
//
//  Created by Nurseda Ozcan on 5.05.2025.
//

import WidgetKit
import SwiftUI

@main
struct FavoriteCoinsWidgetBundle: WidgetBundle {
    var body: some Widget {
        FavoriteCoinsWidget()
        FavoriteCoinsWidgetControl()
        FavoriteCoinsWidgetLiveActivity()
    }
}
