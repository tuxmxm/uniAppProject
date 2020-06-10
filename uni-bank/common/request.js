const baseUrl = "http://128.128.97.200:8101/"; //公共路径 
const api = "/api/"; //跨域
// post请求封装
function postRequest(url, data) {
    var promise = new Promise((resolve, reject) => {
        var that = this;
        var postData = data;
        uni.request({
            url: api + url,
            data: postData,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded",
                //token: uni.getStorageSync("token")
            },
            success: function(res) {
                //返回什么就相应的做调整
                if (res.statusCode == 200) {
                    resolve(res.data);
                } else {
                    // 请求服务器成功，但是由于服务器没有数据返回
                    resolve(res.data.msg);
                }
            },
            error: function(e) {
                reject("网络出错");
            }
        });
    });
    return promise;
}

// get请求封装
function getRequest(url, data) {
    var promise = new Promise((resolve, reject) => {
        var that = this;
        var postData = data;
        uni.request({
            url: api + url,
            data: postData,
            method: "GET",
            dataType: "json",
            header: {
                "content-type": "application/json"
            },
            success: function(res) {
                if (res.statusCode == 200) {
                    resolve(res.data);
                } else {
                    resolve(res.data);
                }
            },
            error: function(e) {
                reject("网络出错");
            }
        });
    });
    return promise;
}

module.exports = {
    post: postRequest,
    get: getRequest
};
