/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx88d6ae43291a8209',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b2efdae6cd39233bad7078910ba0a7cd',

  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omYGe51P7SwKk6MEV_MbA7EZkJGk','omYGe59ZngwPcP_fuSM-LEfZNL0M',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0lXAWjoYAeQ9ieVDkpaynnhF1vtnFRhNqd53RVDKAFs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '2-12',
      festivals: [

        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'bb', year: '2003', date: '02-12',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '07-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-11-21' },
       
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0lXAWjoYAeQ9ieVDkpaynnhF1vtnFRhNqd53RVDKAFs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omYGe51P7SwKk6MEV_MbA7EZkJGk',
    }
  ],

}

module.exports = USER_CONFIG

