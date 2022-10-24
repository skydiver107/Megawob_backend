export const MONGO_HOST = 'mongodb+srv://root:QWERqwer1234@cluster0.cagnj.mongodb.net/mega_wob?ssl=true'
 //export const MONGO_HOST = 'mongodb+srv://root:QWERqwer1234@cluster0.cagnj.mongodb.net/mega_wob'

 export const jwtConfig = {
    secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
    refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
    expireTime: '30m',
    refreshTokenExpireTime: '30m'
}

export const BAD_REQUEST = { success: false, message: 'Bad Request', data: null }
export const BACKEND_ERROR = { success: false, message: 'Backend Server Error!', data: null }