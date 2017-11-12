<template><div>
<Card>
    <Form :model="queryForm" :label-width="100">
        <Row>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="昵称" prop="nick_name">
                    <Input type="text" v-model="saveForm.nick_name" placeholder="请输入昵称"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="手机号" prop="mobile">
                    <Input type="text" v-model="saveForm.mobile" placeholder="请输入手机号"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="城市" prop="CityName">
                    <Input type="text" v-model="saveForm.CityName" placeholder="请输入城市"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>    
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="用户状态" prop="frozen_flag">
                    <Input type="text" v-model="saveForm.frozen_flag" placeholder="请输入是否冻结"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="注册时间" prop="CreatedAtStart">
                    <Input type="text" v-model="saveForm.CreatedAtStart" placeholder="注册时间开始"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="注册时间" prop="CreatedAtEnd">
                    <Input type="text" v-model="saveForm.CreatedAtEnd" placeholder="注册时间开始"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="20" style="text-align: center; margin-bottom: -15px;">
                <FormItem>
                    <Button type="primary" icon="android-search" @click="doQuery">查询</Button>
                    <Button type="error" icon="android-refresh" @click="doClear">清空</Button>
                    <Button type="success" icon="archive">导出</Button>
                </FormItem>
            </Col>
        </Row>
    </Form>
</Card>
<Modal width="400" v-model="saveModal.show" loading @on-ok="doSave" :title="saveModal.title">
        <Form :model="saveForm" :label-width="80" >
            <Row>
                <Col span="20" style="margin-bottom: -15px;">
                    <FormItem label="积分" prop="score">
                        <Input type="text" v-model="saveForm.score" placeholder="请输入积分"></Input>
                    </FormItem>
                </Col>
            </Row>
        </Form>
</Modal>
<Card>
    <Table :columns="columnsList" :data="tableData" border></Table>
    <div style="text-align: right; padding-top: 10px;">
        <Page :total="page.total" :current="page.current" :page-size="page.size" show-total show-elevator @on-change="changePage">
            总计 {{page.total}} 条
        </Page>
    </div>
</Card>
</div></template>
<script>
import util from '@/libs/util';
export default {
    data () {
        return {
            saveModal: {
                show: false,
                title: ''
            },
            queryForm: {
                mobile: '',
                regist_circle_id: '',
                nick_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                open_shop_flag: '',
                open_shop_flag_name: '',
                frozen_flag: '',
                level: '',
                level_name: '',
                score: '',
                coin: '',
                created_at: ''
            },
            saveForm: {
                id: '',
                mobile: '',
                regist_circle_id: '',
                nick_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                open_shop_flag: '',
                open_shop_flag_name: '',
                frozen_flag: '',
                level: '',
                level_name: '',
                score: '',
                coin: '',
                created_at: ''
            },
            columnsList:[
                {
                    title: '序号',
                    type: 'index',
                    width: 80,
                    align: 'center'
                },
                {
                    title: '昵称',
                    key: 'nick_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '手机号',
                    key: 'mobile',
                    width: 150,
                    align: 'center'
                },

                {
                    title: '城市',
                    key: 'CityName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '县区',
                    key: 'CountyName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '镇',
                    key: 'TownName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '商铺状态',
                    key: 'open_shop_flag_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '用户状态',
                    key: 'frozen_flag_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '积分级别',
                    key: 'level_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '积分',
                    key: 'score',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '金币数量',
                    key: 'coin',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '注册时间',
                    key: 'created_at',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'action',
                    fixed: 'right',
                    width: 250,
                    render: (h, params) => {
                          return h('div', [
                              h('Button', {
                                props: {
                                    type: 'primary',
                                      icon: 'document',
                                      size: 'small'
                                },
                                style: {
                                      marginRight: '5px'
                                },
                                on: {
                                      click: () => {
                                         let argu = { order_id: params.row.order_id }
                                           //util.openNewPage(this, 'order_info', argu);
                                           this.$router.push({
                                               name: 'order_info',
                                               params: argu
                                           })
                                       }
                                   }
                            }, '详情'),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                      icon: 'compose',
                                      size: 'small'
                                },
                                style: {
                                      marginRight: '5px'
                                },
                                on: {
                                      click: () => {
                                          this.showModalUpdate(params.row.id)
                                       }
                                   }
                            }, '修改积分'),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                      icon: 'ios-trash-outline',
                                      size: 'small'
                                },
                                style: {
                                      marginRight: '5px'
                                },
                                on: {
                                      click: () => {
                                          this.doDelete(params.row.id)
                                       }
                                   }
                            }, '解冻')
                          ])
                    }
                }
            ],
            tableData: [],
            page: {
                total: 0,
                size: 10,
                current: 1
            }
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.clearPage()
            this.getList()
        },
        doQuery() {
            this.clearPage()
            this.getList()
        },
        doClear () {
            this.queryForm.mobile = ''
            this.queryForm.regist_circle_id = ''
            this.queryForm.nick_name = ''
            this.queryForm.CityName = ''
            this.queryForm.CountyName = ''
            this.queryForm.TownName = ''
            this.queryForm.open_shop_flag = ''
            this.queryForm.open_shop_flag_name = ''
            this.queryForm.frozen_flag = ''
            this.queryForm.level = ''
            this.queryForm.level_name = ''
            this.queryForm.score = ''
            this.queryForm.coin = ''
            this.queryForm.created_at = ''
            this.doQuery()
        },
        doSave () {
            let _self = this;
            util.ajax.post('/MemberManagement/MemberList/save', this.saveForm).then(function (res) {
                _self.saveModal.show = false
                _self.$Message.info('操作成功')
                _self.doQuery()
              }).catch(function (err) {
                _self.saveModal.show = false
              })
        },
        doDelete (id) {
            let _self = this
            this.$Modal.confirm({
                title: '删除',
                content: '确定要删除？',
                loading: true,
                onOk: () => {
                    let _modal = this.$Modal
                    util.ajax.post('/MemberManagement/MemberList/delete/' + id).then(function (res) {
                        _modal.remove()
                        if (res.status === 200) {
                            if (res.data.code === "0") {
                                _self.$Message.info('操作成功')
                                _self.getList()
                            }
                        }
                    }).catch(function (err) {
                        _modal.remove()
                        console.log(err)
                    })
                }
            })
        },
        getList () {
            let _self = this
            util.ajax.get('/MemberManagement/MemberList?page=' + this.page.current + '&limit=' + this.page.size).then(function (res) {
                console.log(res)
                if (res.status === 200) {
                    if (res.data.result === 1) {
                        _self.tableData = res.data.content.data
                        _self.page.total = res.data.content.total
                        _self.page.size = res.data.content.per_page
                        _self.page.current = res.data.content.current_page
                    }
                }
            }).catch(function (error) {
                console.log(error)
              })
        },
        showModalAdd() {
            this.clearSaveForm()
            this.saveModal.title = '添加功能'
            this.saveModal.show = true
        },
        showModalUpdate(id) {
            let _self = this
            util.ajax.get('/MemberManagement/MemberList/detail?id=' + id).then(function (res) {
                if (res.status === 200) {
                    if (res.data.code === "0") {
                        _self.saveForm = res.data.data
                    }
                }
            }).catch(function (error) {
                console.log(error)
              })
            this.saveModal.show = true
            this.saveModal.title = '修改功能'
        },
        clearSaveForm () {
            this.saveForm.id = ''
            this.saveForm.mobile = ''
            this.saveForm.regist_circle_id = ''
            this.saveForm.nick_name = ''
            this.saveForm.CityName = ''
            this.saveForm.CountyName = ''
            this.saveForm.TownName = ''
            this.saveForm.open_shop_flag = ''
            this.saveForm.open_shop_flag_name = ''
            this.saveForm.frozen_flag = ''
            this.saveForm.level = ''
            this.saveForm.level_name = ''
            this.saveForm.score = ''
            this.saveForm.coin = ''
            this.saveForm.created_at = ''
        },
        clearPage () {
            this.page.size = 10
            this.page.current = 1
        },
        changePage () {
            this.getList()
        }
    }
}
</script>