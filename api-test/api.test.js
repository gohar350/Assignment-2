/*const supertest=require('supertest')
const request=supertest('http://localhost:3000/api/user/current')
curl -X 

it('test case1', async()=>{

   
   const responce=await request.get('auto/dashboard/table/3')
   console.log(responce.body);
   
   
})
*/

const request = require('supertest')
const app = require('http://localhost:3000/api/user/current')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})