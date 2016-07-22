//
//  Person.m
//  Test
//
//  Created by Dongdong on 16/7/21.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "Person.h"
#import "RCTConvert.h"
#import "RCTEventDispatcher.h"
#import "RCTEventEmitter.h"

@implementation Person

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(greet: (NSString *)name)
{
  NSLog(@"Hi, %@", name);
  [_bridge.eventDispatcher sendAppEventWithName:@"greeted" body:@{@"name": @"name"}];
}

RCT_EXPORT_METHOD(greets:(NSString *)name name2:(NSString *)name2 callBack:(RCTResponseSenderBlock)callBack)
{
  NSLog(@"Hi, %@! %@!!!", name, name2);
  
  callBack(@[@[@12,@23,@34]]);
}

@end
