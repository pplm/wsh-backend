<template><div>
<Card>
    <Form :model="queryForm" :label-width="80">
        <Row>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="始发地" prop="thjorgard">
                    <Input type="text" v-model="queryForm.thjorgard"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="目的地" prop="destination">
                    <Input type="text" v-model="queryForm.destination"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type">
                    <Input type="text" v-model="queryForm.user_type"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type_name">
                    <Input type="text" v-model="queryForm.user_type_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="圈子ID" prop="circle_id">
                    <Input type="text" v-model="queryForm.circle_id"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="圈子名称" prop="circle_name">
                    <Input type="text" v-model="queryForm.circle_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type">
                    <Input type="text" v-model="queryForm.traffic_type"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type_name">
                    <Input type="text" v-model="queryForm.traffic_type_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="费用" prop="cost">
                    <Input type="text" v-model="queryForm.cost"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="发布人id" prop="user_id">
                    <Input type="text" v-model="queryForm.user_id"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="发布人名称" prop="user_name">
                    <Input type="text" v-model="queryForm.user_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="用户头像地址" prop="user_avatar_url">
                    <Input type="text" v-model="queryForm.user_avatar_url"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="发车时间" prop="depart_at">
                    <Input type="text" v-model="queryForm.depart_at"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="状态" prop="state_id">
                    <Input type="text" v-model="queryForm.state_id"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="状态名称" prop="state_name">
                    <Input type="text" v-model="queryForm.state_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否首页" prop="homepage_flag">
                    <Input type="text" v-model="queryForm.homepage_flag"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag">
                    <Input type="text" v-model="queryForm.putaway_flag"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag_name">
                    <Input type="text" v-model="queryForm.putaway_flag_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="载客数量" prop="passenger_count">
                    <Input type="text" v-model="queryForm.passenger_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="行程描述" prop="desc">
                    <Input type="text" v-model="queryForm.desc"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="本圈是否上架" prop="is_on">
                    <Input type="text" v-model="queryForm.is_on"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否首页展示" prop="homepage_flag">
                    <Input type="text" v-model="queryForm.homepage_flag"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="7" style="text-align: center; margin-bottom: -15px;">
                <FormItem>
                    <Button type="primary" icon="android-search" @click="doQuery">查询</Button>
                    <Button type="error" icon="android-refresh" @click="doClear">清空</Button>
                    <Button type="success" icon="archive">导出</Button>
                </FormItem>
            </Col>
        </Row>
    </Form>
</Card>
<Modal width="700" v-model="saveModal.show" loading @on-ok="doSave" :title="saveModal.title">
        <Form :model="saveForm" :label-width="80" >
        <Row>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="始发地" prop="thjorgard">
                    <Input type="text" v-model="saveForm.thjorgard" placeholder="请输入始发地"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="目的地" prop="destination">
                    <Input type="text" v-model="saveForm.destination" placeholder="请输入目的地"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type">
                    <Input type="text" v-model="saveForm.user_type" placeholder="请输入顺风车消息"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type_name">
                    <Input type="text" v-model="saveForm.user_type_name" placeholder="请输入顺风车消息"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="圈子ID" prop="circle_id">
                    <Input type="text" v-model="saveForm.circle_id" placeholder="请输入圈子ID"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="圈子名称" prop="circle_name">
                    <Input type="text" v-model="saveForm.circle_name" placeholder="请输入圈子名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type">
                    <Input type="text" v-model="saveForm.traffic_type" placeholder="请输入运输类型"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type_name">
                    <Input type="text" v-model="saveForm.traffic_type_name" placeholder="请输入运输类型"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="费用" prop="cost">
                    <Input type="text" v-model="saveForm.cost" placeholder="请输入费用"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="发布人id" prop="user_id">
                    <Input type="text" v-model="saveForm.user_id" placeholder="请输入发布人id"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="发布人名称" prop="user_name">
                    <Input type="text" v-model="saveForm.user_name" placeholder="请输入发布人名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="用户头像地址" prop="user_avatar_url">
                    <Input type="text" v-model="saveForm.user_avatar_url" placeholder="请输入用户头像地址"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="发车时间" prop="depart_at">
                    <Input type="text" v-model="saveForm.depart_at" placeholder="请输入发车时间"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="状态" prop="state_id">
                    <Input type="text" v-model="saveForm.state_id" placeholder="请输入状态"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="状态名称" prop="state_name">
                    <Input type="text" v-model="saveForm.state_name" placeholder="请输入状态名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否首页" prop="homepage_flag">
                    <Input type="text" v-model="saveForm.homepage_flag" placeholder="请输入是否首页"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag">
                    <Input type="text" v-model="saveForm.putaway_flag" placeholder="请输入是否上下架"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag_name">
                    <Input type="text" v-model="saveForm.putaway_flag_name" placeholder="请输入是否上下架"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="载客数量" prop="passenger_count">
                    <Input type="text" v-model="saveForm.passenger_count" placeholder="请输入载客数量"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="行程描述" prop="desc">
                    <Input type="text" v-model="saveForm.desc" placeholder="请输入行程描述"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="本圈是否上架" prop="is_on">
                    <Input type="text" v-model="saveForm.is_on" placeholder="请输入本圈是否上架"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否首页展示" prop="homepage_flag">
                    <Input type="text" v-model="saveForm.homepage_flag" placeholder="请输入是否首页展示"></Input>
                </FormItem>
            </Col>
        </Row>
        </Form>
</Modal>
<Card>
<Button type="primary" icon="plus" style="margin-bottom: 5px; margin-top: -10px; text-align:right;" @click="showModalAdd">添加</Button>
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
                thjorgard: '',
                destination: '',
                user_type: '',
                user_type_name: '',
                circle_id: '',
                circle_name: '',
                traffic_type: '',
                traffic_type_name: '',
                cost: '',
                user_id: '',
                user_name: '',
                user_avatar_url: '',
                depart_at: '',
                state_id: '',
                state_name: '',
                homepage_flag: '',
                putaway_flag: '',
                putaway_flag_name: '',
                passenger_count: '',
                desc: '',
                is_on: '',
                homepage_flag: ''
            },
            saveForm: {
                id: '',
                thjorgard: '',
                destination: '',
                user_type: '',
                user_type_name: '',
                circle_id: '',
                circle_name: '',
                traffic_type: '',
                traffic_type_name: '',
                cost: '',
                user_id: '',
                user_name: '',
                user_avatar_url: '',
                depart_at: '',
                state_id: '',
                state_name: '',
                homepage_flag: '',
                putaway_flag: '',
                putaway_flag_name: '',
                passenger_count: '',
                desc: '',
                is_on: '',
                homepage_flag: ''
            },
            columnsList:[
                {
                    title: '系统id',
                    key: 'id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '始发地',
                    key: 'thjorgard',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '目的地',
                    key: 'destination',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '顺风车消息',
                    key: 'user_type',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '顺风车消息',
                    key: 'user_type_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '圈子ID',
                    key: 'circle_id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '圈子名称',
                    key: 'circle_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '运输类型',
                    key: 'traffic_type',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '运输类型',
                    key: 'traffic_type_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '费用',
                    key: 'cost',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '发布人id',
                    key: 'user_id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '发布人名称',
                    key: 'user_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '用户头像地址',
                    key: 'user_avatar_url',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '发车时间',
                    key: 'depart_at',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '状态',
                    key: 'state_id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '状态名称',
                    key: 'state_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否首页',
                    key: 'homepage_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否上下架',
                    key: 'putaway_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否上下架',
                    key: 'putaway_flag_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '载客数量',
                    key: 'passenger_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '行程描述',
                    key: 'desc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '本圈是否上架',
                    key: 'is_on',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否首页展示',
                    key: 'homepage_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'action',
                    fixed: 'right',
                    width: 200,
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
                            }, '编辑'),
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
                            }, '删除')
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
            this.queryForm.thjorgard = ''
            this.queryForm.destination = ''
            this.queryForm.user_type = ''
            this.queryForm.user_type_name = ''
            this.queryForm.circle_id = ''
            this.queryForm.circle_name = ''
            this.queryForm.traffic_type = ''
            this.queryForm.traffic_type_name = ''
            this.queryForm.cost = ''
            this.queryForm.user_id = ''
            this.queryForm.user_name = ''
            this.queryForm.user_avatar_url = ''
            this.queryForm.depart_at = ''
            this.queryForm.state_id = ''
            this.queryForm.state_name = ''
            this.queryForm.homepage_flag = ''
            this.queryForm.putaway_flag = ''
            this.queryForm.putaway_flag_name = ''
            this.queryForm.passenger_count = ''
            this.queryForm.desc = ''
            this.queryForm.is_on = ''
            this.queryForm.homepage_flag = ''
            this.doQuery()
        },
        doSave () {
            let _self = this;
            util.ajax.post('/CarpoolManagement/CarpoolList/save', this.saveForm).then(function (res) {
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
                    util.ajax.post('/CarpoolManagement/CarpoolList/delete/' + id).then(function (res) {
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
            util.ajax.get('/CarpoolManagement/CarpoolList?page=' + this.page.current + '&limit=' + this.page.size).then(function (res) {
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
            util.ajax.get('/CarpoolManagement/CarpoolList/detail?id=' + id).then(function (res) {
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
            this.saveForm.thjorgard = ''
            this.saveForm.destination = ''
            this.saveForm.user_type = ''
            this.saveForm.user_type_name = ''
            this.saveForm.circle_id = ''
            this.saveForm.circle_name = ''
            this.saveForm.traffic_type = ''
            this.saveForm.traffic_type_name = ''
            this.saveForm.cost = ''
            this.saveForm.user_id = ''
            this.saveForm.user_name = ''
            this.saveForm.user_avatar_url = ''
            this.saveForm.depart_at = ''
            this.saveForm.state_id = ''
            this.saveForm.state_name = ''
            this.saveForm.homepage_flag = ''
            this.saveForm.putaway_flag = ''
            this.saveForm.putaway_flag_name = ''
            this.saveForm.passenger_count = ''
            this.saveForm.desc = ''
            this.saveForm.is_on = ''
            this.saveForm.homepage_flag = ''
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
<template><div>
<Card>
    <Form :model="queryForm" :label-width="80">
        <Row>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="始发地" prop="thjorgard">
                    <Input type="text" v-model="queryForm.thjorgard"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="目的地" prop="destination">
                    <Input type="text" v-model="queryForm.destination"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type">
                    <Input type="text" v-model="queryForm.user_type"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type_name">
                    <Input type="text" v-model="queryForm.user_type_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="圈子ID" prop="circle_id">
                    <Input type="text" v-model="queryForm.circle_id"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="圈子名称" prop="circle_name">
                    <Input type="text" v-model="queryForm.circle_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type">
                    <Input type="text" v-model="queryForm.traffic_type"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type_name">
                    <Input type="text" v-model="queryForm.traffic_type_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="费用" prop="cost">
                    <Input type="text" v-model="queryForm.cost"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="发布人id" prop="user_id">
                    <Input type="text" v-model="queryForm.user_id"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="发布人名称" prop="user_name">
                    <Input type="text" v-model="queryForm.user_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="用户头像地址" prop="user_avatar_url">
                    <Input type="text" v-model="queryForm.user_avatar_url"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="发车时间" prop="depart_at">
                    <Input type="text" v-model="queryForm.depart_at"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="状态" prop="state_id">
                    <Input type="text" v-model="queryForm.state_id"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="状态名称" prop="state_name">
                    <Input type="text" v-model="queryForm.state_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否首页" prop="homepage_flag">
                    <Input type="text" v-model="queryForm.homepage_flag"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag">
                    <Input type="text" v-model="queryForm.putaway_flag"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag_name">
                    <Input type="text" v-model="queryForm.putaway_flag_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="载客数量" prop="passenger_count">
                    <Input type="text" v-model="queryForm.passenger_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="行程描述" prop="desc">
                    <Input type="text" v-model="queryForm.desc"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="本圈是否上架" prop="is_on">
                    <Input type="text" v-model="queryForm.is_on"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否首页展示" prop="homepage_flag">
                    <Input type="text" v-model="queryForm.homepage_flag"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="7" style="text-align: center; margin-bottom: -15px;">
                <FormItem>
                    <Button type="primary" icon="android-search" @click="doQuery">查询</Button>
                    <Button type="error" icon="android-refresh" @click="doClear">清空</Button>
                    <Button type="success" icon="archive">导出</Button>
                </FormItem>
            </Col>
        </Row>
    </Form>
</Card>
<Modal width="700" v-model="saveModal.show" loading @on-ok="doSave" :title="saveModal.title">
        <Form :model="saveForm" :label-width="80" >
        <Row>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="始发地" prop="thjorgard">
                    <Input type="text" v-model="saveForm.thjorgard" placeholder="请输入始发地"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="目的地" prop="destination">
                    <Input type="text" v-model="saveForm.destination" placeholder="请输入目的地"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type">
                    <Input type="text" v-model="saveForm.user_type" placeholder="请输入顺风车消息"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="顺风车消息" prop="user_type_name">
                    <Input type="text" v-model="saveForm.user_type_name" placeholder="请输入顺风车消息"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="圈子ID" prop="circle_id">
                    <Input type="text" v-model="saveForm.circle_id" placeholder="请输入圈子ID"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="圈子名称" prop="circle_name">
                    <Input type="text" v-model="saveForm.circle_name" placeholder="请输入圈子名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type">
                    <Input type="text" v-model="saveForm.traffic_type" placeholder="请输入运输类型"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="运输类型" prop="traffic_type_name">
                    <Input type="text" v-model="saveForm.traffic_type_name" placeholder="请输入运输类型"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="费用" prop="cost">
                    <Input type="text" v-model="saveForm.cost" placeholder="请输入费用"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="发布人id" prop="user_id">
                    <Input type="text" v-model="saveForm.user_id" placeholder="请输入发布人id"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="发布人名称" prop="user_name">
                    <Input type="text" v-model="saveForm.user_name" placeholder="请输入发布人名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="用户头像地址" prop="user_avatar_url">
                    <Input type="text" v-model="saveForm.user_avatar_url" placeholder="请输入用户头像地址"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="发车时间" prop="depart_at">
                    <Input type="text" v-model="saveForm.depart_at" placeholder="请输入发车时间"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="状态" prop="state_id">
                    <Input type="text" v-model="saveForm.state_id" placeholder="请输入状态"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="状态名称" prop="state_name">
                    <Input type="text" v-model="saveForm.state_name" placeholder="请输入状态名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否首页" prop="homepage_flag">
                    <Input type="text" v-model="saveForm.homepage_flag" placeholder="请输入是否首页"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag">
                    <Input type="text" v-model="saveForm.putaway_flag" placeholder="请输入是否上下架"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag_name">
                    <Input type="text" v-model="saveForm.putaway_flag_name" placeholder="请输入是否上下架"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="载客数量" prop="passenger_count">
                    <Input type="text" v-model="saveForm.passenger_count" placeholder="请输入载客数量"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="行程描述" prop="desc">
                    <Input type="text" v-model="saveForm.desc" placeholder="请输入行程描述"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="本圈是否上架" prop="is_on">
                    <Input type="text" v-model="saveForm.is_on" placeholder="请输入本圈是否上架"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否首页展示" prop="homepage_flag">
                    <Input type="text" v-model="saveForm.homepage_flag" placeholder="请输入是否首页展示"></Input>
                </FormItem>
            </Col>
        </Row>
        </Form>
</Modal>
<Card>
<Button type="primary" icon="plus" style="margin-bottom: 5px; margin-top: -10px; text-align:right;" @click="showModalAdd">添加</Button>
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
                thjorgard: '',
                destination: '',
                user_type: '',
                user_type_name: '',
                circle_id: '',
                circle_name: '',
                traffic_type: '',
                traffic_type_name: '',
                cost: '',
                user_id: '',
                user_name: '',
                user_avatar_url: '',
                depart_at: '',
                state_id: '',
                state_name: '',
                homepage_flag: '',
                putaway_flag: '',
                putaway_flag_name: '',
                passenger_count: '',
                desc: '',
                is_on: '',
                homepage_flag: ''
            },
            saveForm: {
                id: '',
                thjorgard: '',
                destination: '',
                user_type: '',
                user_type_name: '',
                circle_id: '',
                circle_name: '',
                traffic_type: '',
                traffic_type_name: '',
                cost: '',
                user_id: '',
                user_name: '',
                user_avatar_url: '',
                depart_at: '',
                state_id: '',
                state_name: '',
                homepage_flag: '',
                putaway_flag: '',
                putaway_flag_name: '',
                passenger_count: '',
                desc: '',
                is_on: '',
                homepage_flag: ''
            },
            columnsList:[
                {
                    title: '系统id',
                    key: 'id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '始发地',
                    key: 'thjorgard',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '目的地',
                    key: 'destination',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '顺风车消息',
                    key: 'user_type',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '顺风车消息',
                    key: 'user_type_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '圈子ID',
                    key: 'circle_id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '圈子名称',
                    key: 'circle_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '运输类型',
                    key: 'traffic_type',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '运输类型',
                    key: 'traffic_type_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '费用',
                    key: 'cost',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '发布人id',
                    key: 'user_id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '发布人名称',
                    key: 'user_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '用户头像地址',
                    key: 'user_avatar_url',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '发车时间',
                    key: 'depart_at',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '状态',
                    key: 'state_id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '状态名称',
                    key: 'state_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否首页',
                    key: 'homepage_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否上下架',
                    key: 'putaway_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否上下架',
                    key: 'putaway_flag_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '载客数量',
                    key: 'passenger_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '行程描述',
                    key: 'desc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '本圈是否上架',
                    key: 'is_on',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否首页展示',
                    key: 'homepage_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'action',
                    fixed: 'right',
                    width: 200,
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
                            }, '编辑'),
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
                            }, '删除')
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
            this.queryForm.thjorgard = ''
            this.queryForm.destination = ''
            this.queryForm.user_type = ''
            this.queryForm.user_type_name = ''
            this.queryForm.circle_id = ''
            this.queryForm.circle_name = ''
            this.queryForm.traffic_type = ''
            this.queryForm.traffic_type_name = ''
            this.queryForm.cost = ''
            this.queryForm.user_id = ''
            this.queryForm.user_name = ''
            this.queryForm.user_avatar_url = ''
            this.queryForm.depart_at = ''
            this.queryForm.state_id = ''
            this.queryForm.state_name = ''
            this.queryForm.homepage_flag = ''
            this.queryForm.putaway_flag = ''
            this.queryForm.putaway_flag_name = ''
            this.queryForm.passenger_count = ''
            this.queryForm.desc = ''
            this.queryForm.is_on = ''
            this.queryForm.homepage_flag = ''
            this.doQuery()
        },
        doSave () {
            let _self = this;
            util.ajax.post('/CarpoolManagement/CarpoolList/save', this.saveForm).then(function (res) {
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
                    util.ajax.post('/CarpoolManagement/CarpoolList/delete/' + id).then(function (res) {
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
            util.ajax.get('/CarpoolManagement/CarpoolList?page=' + this.page.current + '&limit=' + this.page.size).then(function (res) {
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
            util.ajax.get('/CarpoolManagement/CarpoolList/detail?id=' + id).then(function (res) {
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
            this.saveForm.thjorgard = ''
            this.saveForm.destination = ''
            this.saveForm.user_type = ''
            this.saveForm.user_type_name = ''
            this.saveForm.circle_id = ''
            this.saveForm.circle_name = ''
            this.saveForm.traffic_type = ''
            this.saveForm.traffic_type_name = ''
            this.saveForm.cost = ''
            this.saveForm.user_id = ''
            this.saveForm.user_name = ''
            this.saveForm.user_avatar_url = ''
            this.saveForm.depart_at = ''
            this.saveForm.state_id = ''
            this.saveForm.state_name = ''
            this.saveForm.homepage_flag = ''
            this.saveForm.putaway_flag = ''
            this.saveForm.putaway_flag_name = ''
            this.saveForm.passenger_count = ''
            this.saveForm.desc = ''
            this.saveForm.is_on = ''
            this.saveForm.homepage_flag = ''
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