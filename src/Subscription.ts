
export class Subscriptions {
    constructor() {
        this.arrayConfig = [];
    }
    private arrayConfig: [];
    /*  
       * 订阅模式 - 使用对象 key and  value 键值对
       * 说明 
       *   value 初始化一个空数组 []
       *   空数组 推入函数和对象以及其他参数
   */
    public on (name: string, foo: Function): this {
           name = name.replace(/\[\s]+/g, '')
           this.arrayConfig[name] = this.arrayConfig[name] || []
           this.arrayConfig[name].push(foo)
       return this
   }

   /*  
       * 发布模式 - 查找对象 value 数组遍历
       * 说明 
       *   value 数组遍历
       *   执行每一项前进行检查, 正在执行过程中, 或者执行中检查到错误, 通知消息并执行下一项, 不中断后续执行
   */
   public trigger(name: string, args: any[] ): this {
       const fallback = this.arrayConfig[name] || []
       for(var i =0, fb; (fb = fallback[i]); i++) {
           if(!fb['notice'] && !fb['loading']) {
               fb['loading'] = true
               fb['notice'] = true
               try{
                   fb.bind(this, args)
                   fb['loading'] = false
               }
               catch(err){
                   if(err)  fb['notice'] = true
               }
           }
       }
       return this
   }
}