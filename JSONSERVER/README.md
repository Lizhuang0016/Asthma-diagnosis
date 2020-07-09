//获取所有用户信息
http://localhost:3000/users

//获取id为1的用户信息
http://localhost:3000/users/1

//获取所有公司信息
http://localhost:3000/companies

//获取单个公司信息
http://localhost:3000/companies/1

//获取所有公司Id为3的用户信息
http://localhost:3000/companies/3/users

//根据公司名字获取信息
http://localhost:3000/companies?name=Microsoft

//根据公司名字获取信息
http://localhost:3000/companies?name=Microsoft

//根据多个名字获取公司信息
http://locahost:3000/companies?name=Microsoft&name=Apple

//获取一页中只有两条数据
http://locahost:3000/companies?page=1&_limit=2

//升序排序asc升序desc降序
http://locahost:3000/companies?_sort=name&_order=asc

//获取年龄30及以上的
http://locahost:3000/users?age_gte=30

//获取年龄在30到40之间
http://locahost:3000/users?age_gte=30&age_lte=40

//搜索用户信息
http://locahost:3000/users?q=h
