import config from './config'
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime
}

export function get(url){
  return new Promise((reslove,reject)=>{
    wx.request({
        url:config.BASE_URL+url,
        success:function(res){
          if(res.data.code==200){
              reslove(res.data)
          }else{
              reject(res.data)
          }
        }
    })
  })
}
