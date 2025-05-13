//
//  SharedStorageBridge.m
//  Crypto
//
//  Created by Nurseda Ozcan on 13.05.2025.
//
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SharedStorage, NSObject)

RCT_EXTERN_METHOD(saveFavoriteCoins:(NSString *)coins)
RCT_EXTERN_METHOD(reloadWidget)

@end

