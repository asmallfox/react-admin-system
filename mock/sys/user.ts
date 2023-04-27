import { MockMethod } from 'vite-plugin-mock'

const userType = [1, 2, 3, 4]

const userList = [
  {
    id: 1,
    username: 'Tom',
    nickname: '张三',
    role: userType[0],
    createTime: 1682385080446,
    description: '是劳动法律精神独立房间'
  },
  {
    id: 2,
    username: 'smallfox',
    nickname: '小狐幽',
    role: userType[1],
    createTime: 1514714800000,
    description: '开发人员'
  },
  {
    id: 3,
    username: 'admin',
    nickname: '管理人员1',
    role: userType[1],
    createTime: 1514569812000,
    description: '系统管理员2'
  },
  {
    id: 4,
    username: 'asdf',
    nickname: '王五',
    role: userType[2],
    createTime: 1514764800000,
    description: '系统管理员3'
  },
  {
    id: 5,
    username: 'Tom',
    nickname: '张三',
    role: userType[0],
    createTime: 1514764800000,
    description: '系统管理员1'
  },
  {
    id: 6,
    username: 'smallfox',
    nickname: '小狐幽',
    role: userType[1],
    createTime: 1514764800000,
    description: '开发人员'
  },
  {
    id: 7,
    username: 'admin',
    nickname: '管理人员1',
    role: userType[1],
    createTime: 1514764800000,
    description: '系统管理员2'
  },
  {
    id: 8,
    username: 'asdf',
    nickname: '王五',
    role: userType[2],
    createTime: 1514764800000,
    description: '系统管理员3'
  },
  {
    id: 9,
    username: 'Tom',
    nickname: '张三',
    role: userType[0],
    createTime: 1514764800000,
    description: '系统管理员1'
  },
  {
    id: 10,
    username: 'smallfox',
    nickname: '小狐幽',
    role: userType[1],
    createTime: 1514764800000,
    description: '开发人员'
  },
  {
    id: 11,
    username: 'admin',
    nickname: '管理人员1',
    role: userType[1],
    createTime: 1514764800000,
    description: '系统管理员2'
  },
  {
    id: 12,
    username: 'asdf',
    nickname: '王五',
    role: userType[2],
    createTime: 1514764800000,
    description: '系统管理员3'
  },
  {
    id: 13,
    username: 'Tom',
    nickname: '张三',
    role: userType[0],
    createTime: 1514764800000,
    description: '系统管理员1'
  },
  {
    id: 14,
    username: 'smallfox',
    nickname: '小狐幽',
    role: userType[1],
    createTime: 1514764800000,
    description: '开发人员'
  },
  {
    id: 15,
    username: 'admin',
    nickname: '管理人员1',
    role: userType[1],
    createTime: 1514764800000,
    description: '系统管理员2'
  },
  {
    id: 16,
    username: 'asdf',
    nickname: '王五',
    role: userType[2],
    createTime: 1514764800000,
    description: '系统管理员3'
  }
]

export default [
  // mock user login
  {
    url: '/basic-api/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === '123456') {
        return {
          code: 200,
          data: {
            token: 'user token by mock'
          }
        }
      } else {
        return {
          code: 404,
          message: 'error',
          type: 'error'
        }
      }
    }
  },
  // mock user list
  {
    url: '/basic-api/user-list',
    method: 'get',
    response: ({ query }) => {
      // desc 降序、asc 升序
      const { page = 1, pageSize = 10, order = 'asc' } = query
      const start = (page - 1) * pageSize
      const end = start + Number(pageSize)
      let result = userList.slice(start, end)
      result = result.sort((i1, i2) => {
        if (order === 'asc') {
          return i1.createTime - i2.createTime
        } else if (order === 'desc') {
          return i2.createTime - i1.createTime
        }
        return 0
      })
      return {
        code: 200,
        data: {
          rows: result,
          total: userList.length
        }
      }
    }
  },
  // mock user delete
  {
    url: '/basic-api/delete-user-by-id',
    method: 'delete',
    response: ({ body }) => {
      try {
        const index = userList.findIndex((item) => item.id === body.id)
        if (index === -1) throw new Error('Invalid id')
        userList.splice(index, 1)
        return {
          code: 200,
          data: {
            message: 'Delete by id successfully'
          }
        }
      } catch (error) {
        return {
          code: 404,
          data: {
            message: 'Delete by id failed'
          },
          type: 'error'
        }
      }
    }
  },
  {
    url: '/basic-api/add-user',
    method: 'post',
    response: ({ body }) => {
      const { username, nickname, role, description } = body
      const existUser = userList.some((item) => item.username === username)
      if (!username || !nickname || !role) {
        return {
          code: 404,
          data: {
            message: 'Please input all fields'
          },
          type: 'error'
        }
      } else if (existUser) {
        return {
          code: 404,
          data: {
            message: 'user already exists'
          },
          type: 'error'
        }
      }
      userList.push({
        id: userList.length + 1,
        username,
        nickname,
        role,
        description,
        createTime: Date.now()
      })
      return {
        code: 200,
        data: {
          message: 'Add user successfully'
        }
      }
    }
  }
] as MockMethod[]
