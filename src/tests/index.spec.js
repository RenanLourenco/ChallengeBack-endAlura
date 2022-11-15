import request from './test_helper.js'
import app from '../app.js'



describe('getVideoById', ()=>{
    it('should return titulo',async ()=>{
        const res = await request(app).get('/')
        .expect(res.body).toHaveProperty('titulo')
    })
})
