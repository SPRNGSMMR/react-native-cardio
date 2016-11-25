//
//  RCTCardIO.m
//  RCTCardIO
//
//  Created by Sylvain Reucherand on 13/07/16.
//  Copyright © 2016 Sylvain Reucherand. All rights reserved.
//

#import "RCTCardIOView.h"
#import "CardInfo.h"

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation RCTCardIOView {
    CardView *cardView;
}

RCT_EXPORT_MODULE();

static id ObjectOrNull(id object) {
    return object ?: [NSNull null];
}

- (UIView *)view {
    cardView = [[CardView alloc] init];
    cardView.delegate = self;
    
    return cardView;
}

#pragma mark - CardViewDelegate methods

- (void)didScanCard:(CardInfo *)info {
    [self.bridge.eventDispatcher sendAppEventWithName:@"didScanCard" body:ObjectOrNull(info.numbers)];
}

- (void)didReceiveFocusScore:(CGFloat)score {
    [self.bridge.eventDispatcher sendAppEventWithName:@"didReceiveFocusScore" body:@(score)];
}

@end
