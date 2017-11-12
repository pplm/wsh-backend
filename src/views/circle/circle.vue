<template><div>
<Card>
    <Form :model="queryForm" :label-width="80">
        <Row>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="圈子" prop="name">
                    <Input type="text" v-model="queryForm.name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否有代理商" prop="agent_flag">
                    <Input type="text" v-model="queryForm.agent_flag"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否是代理商" prop="agent_flag_name">
                    <Input type="text" v-model="queryForm.agent_flag_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="城市" prop="CityName">
                    <Input type="text" v-model="queryForm.CityName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="县区" prop="CountyName">
                    <Input type="text" v-model="queryForm.CountyName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="镇" prop="TownName">
                    <Input type="text" v-model="queryForm.TownName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="代理商名称" prop="agent_name">
                    <Input type="text" v-model="queryForm.agent_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="手机号" prop="mobile">
                    <Input type="text" v-model="queryForm.mobile"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="店铺数" prop="valid_shops_count">
                    <Input type="text" v-model="queryForm.valid_shops_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="会员数" prop="regist_number">
                    <Input type="text" v-model="queryForm.regist_number"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="二手车数" prop="used_car_count">
                    <Input type="text" v-model="queryForm.used_car_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="顺风车数" prop="ride_sharing_count">
                    <Input type="text" v-model="queryForm.ride_sharing_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="信息数" prop="valid_informations_count">
                    <Input type="text" v-model="queryForm.valid_informations_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="备注" prop="remark">
                    <Input type="text" v-model="queryForm.remark"></Input>
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
                <FormItem label="圈子" prop="name">
                    <Input type="text" v-model="saveForm.name" placeholder="请输入圈子"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否有代理商" prop="agent_flag">
                    <Input type="text" v-model="saveForm.agent_flag" placeholder="请输入是否有代理商"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否是代理商" prop="agent_flag_name">
                    <Input type="text" v-model="saveForm.agent_flag_name" placeholder="请输入是否是代理商"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="城市" prop="CityName">
                    <Input type="text" v-model="saveForm.CityName" placeholder="请输入城市"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="县区" prop="CountyName">
                    <Input type="text" v-model="saveForm.CountyName" placeholder="请输入县区"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="镇" prop="TownName">
                    <Input type="text" v-model="saveForm.TownName" placeholder="请输入镇"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="代理商名称" prop="agent_name">
                    <Input type="text" v-model="saveForm.agent_name" placeholder="请输入代理商名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="手机号" prop="mobile">
                    <Input type="text" v-model="saveForm.mobile" placeholder="请输入手机号"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="店铺数" prop="valid_shops_count">
                    <Input type="text" v-model="saveForm.valid_shops_count" placeholder="请输入店铺数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="会员数" prop="regist_number">
                    <Input type="text" v-model="saveForm.regist_number" placeholder="请输入会员数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="二手车数" prop="used_car_count">
                    <Input type="text" v-model="saveForm.used_car_count" placeholder="请输入二手车数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="顺风车数" prop="ride_sharing_count">
                    <Input type="text" v-model="saveForm.ride_sharing_count" placeholder="请输入顺风车数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="信息数" prop="valid_informations_count">
                    <Input type="text" v-model="saveForm.valid_informations_count" placeholder="请输入信息数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="备注" prop="remark">
                    <Input type="text" v-model="saveForm.remark" placeholder="请输入备注"></Input>
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
                name: '',
                agent_flag: '',
                agent_flag_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                agent_name: '',
                mobile: '',
                valid_shops_count: '',
                regist_number: '',
                used_car_count: '',
                ride_sharing_count: '',
                valid_informations_count: '',
                remark: ''
            },
            saveForm: {
                id: '',
                name: '',
                agent_flag: '',
                agent_flag_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                agent_name: '',
                mobile: '',
                valid_shops_count: '',
                regist_number: '',
                used_car_count: '',
                ride_sharing_count: '',
                valid_informations_count: '',
                remark: ''
            },
            columnsList:[
                {
                    title: '系统id',
                    key: 'id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '圈子',
                    key: 'name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否有代理商',
                    key: 'agent_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否是代理商',
                    key: 'agent_flag_name',
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
                    title: '代理商名称',
                    key: 'agent_name',
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
                    title: '店铺数',
                    key: 'valid_shops_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '会员数',
                    key: 'regist_number',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '二手车数',
                    key: 'used_car_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '顺风车数',
                    key: 'ride_sharing_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '信息数',
                    key: 'valid_informations_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '备注',
                    key: 'remark',
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
            this.queryForm.name = ''
            this.queryForm.agent_flag = ''
            this.queryForm.agent_flag_name = ''
            this.queryForm.CityName = ''
            this.queryForm.CountyName = ''
            this.queryForm.TownName = ''
            this.queryForm.agent_name = ''
            this.queryForm.mobile = ''
            this.queryForm.valid_shops_count = ''
            this.queryForm.regist_number = ''
            this.queryForm.used_car_count = ''
            this.queryForm.ride_sharing_count = ''
            this.queryForm.valid_informations_count = ''
            this.queryForm.remark = ''
            this.doQuery()
        },
        doSave () {
            let _self = this;
            util.ajax.post('/CircleManagement/CircleList/save', this.saveForm).then(function (res) {
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
                    util.ajax.post('/CircleManagement/CircleList/delete/' + id).then(function (res) {
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
            util.ajax.get('/CircleManagement/CircleList?page=' + this.page.current + '&limit=' + this.page.size).then(function (res) {
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
            util.ajax.get('/CircleManagement/CircleList/detail?id=' + id).then(function (res) {
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
            this.saveForm.name = ''
            this.saveForm.agent_flag = ''
            this.saveForm.agent_flag_name = ''
            this.saveForm.CityName = ''
            this.saveForm.CountyName = ''
            this.saveForm.TownName = ''
            this.saveForm.agent_name = ''
            this.saveForm.mobile = ''
            this.saveForm.valid_shops_count = ''
            this.saveForm.regist_number = ''
            this.saveForm.used_car_count = ''
            this.saveForm.ride_sharing_count = ''
            this.saveForm.valid_informations_count = ''
            this.saveForm.remark = ''
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
Hibernate: select attrs0_.fid as fid6_0_0_, attrs0_.id as id1_0_0_, attrs0_.id as id1_0_1_, attrs0_.create_date as create_d2_0_1_, attrs0_.delete_flag as delete_f3_0_1_, attrs0_.modify_date as modify_d4_0_1_, attrs0_.default_value as default_5_0_1_, attrs0_.fid as fid6_0_1_, attrs0_.label as label7_0_1_, attrs0_.length as length8_0_1_, attrs0_.name as name9_0_1_, attrs0_.precise as precise10_0_1_, attrs0_.type as type11_0_1_ from attr attrs0_ where attrs0_.fid=?
<template><div>
<Card>
    <Form :model="queryForm" :label-width="80">
        <Row>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="圈子" prop="name">
                    <Input type="text" v-model="queryForm.name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否有代理商" prop="agent_flag">
                    <Input type="text" v-model="queryForm.agent_flag"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否是代理商" prop="agent_flag_name">
                    <Input type="text" v-model="queryForm.agent_flag_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="城市" prop="CityName">
                    <Input type="text" v-model="queryForm.CityName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="县区" prop="CountyName">
                    <Input type="text" v-model="queryForm.CountyName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="镇" prop="TownName">
                    <Input type="text" v-model="queryForm.TownName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="代理商名称" prop="agent_name">
                    <Input type="text" v-model="queryForm.agent_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="手机号" prop="mobile">
                    <Input type="text" v-model="queryForm.mobile"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="店铺数" prop="valid_shops_count">
                    <Input type="text" v-model="queryForm.valid_shops_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="会员数" prop="regist_number">
                    <Input type="text" v-model="queryForm.regist_number"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="二手车数" prop="used_car_count">
                    <Input type="text" v-model="queryForm.used_car_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="顺风车数" prop="ride_sharing_count">
                    <Input type="text" v-model="queryForm.ride_sharing_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="信息数" prop="valid_informations_count">
                    <Input type="text" v-model="queryForm.valid_informations_count"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="备注" prop="remark">
                    <Input type="text" v-model="queryForm.remark"></Input>
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
                <FormItem label="圈子" prop="name">
                    <Input type="text" v-model="saveForm.name" placeholder="请输入圈子"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否有代理商" prop="agent_flag">
                    <Input type="text" v-model="saveForm.agent_flag" placeholder="请输入是否有代理商"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否是代理商" prop="agent_flag_name">
                    <Input type="text" v-model="saveForm.agent_flag_name" placeholder="请输入是否是代理商"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="城市" prop="CityName">
                    <Input type="text" v-model="saveForm.CityName" placeholder="请输入城市"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="县区" prop="CountyName">
                    <Input type="text" v-model="saveForm.CountyName" placeholder="请输入县区"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="镇" prop="TownName">
                    <Input type="text" v-model="saveForm.TownName" placeholder="请输入镇"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="代理商名称" prop="agent_name">
                    <Input type="text" v-model="saveForm.agent_name" placeholder="请输入代理商名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="手机号" prop="mobile">
                    <Input type="text" v-model="saveForm.mobile" placeholder="请输入手机号"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="店铺数" prop="valid_shops_count">
                    <Input type="text" v-model="saveForm.valid_shops_count" placeholder="请输入店铺数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="会员数" prop="regist_number">
                    <Input type="text" v-model="saveForm.regist_number" placeholder="请输入会员数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="二手车数" prop="used_car_count">
                    <Input type="text" v-model="saveForm.used_car_count" placeholder="请输入二手车数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="顺风车数" prop="ride_sharing_count">
                    <Input type="text" v-model="saveForm.ride_sharing_count" placeholder="请输入顺风车数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="信息数" prop="valid_informations_count">
                    <Input type="text" v-model="saveForm.valid_informations_count" placeholder="请输入信息数"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="备���" prop="remark">
                    <Input type="text" v-model="saveForm.remark" placeholder="请输入备注"></Input>
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
                name: '',
                agent_flag: '',
                agent_flag_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                agent_name: '',
                mobile: '',
                valid_shops_count: '',
                regist_number: '',
                used_car_count: '',
                ride_sharing_count: '',
                valid_informations_count: '',
                remark: ''
            },
            saveForm: {
                id: '',
                name: '',
                agent_flag: '',
                agent_flag_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                agent_name: '',
                mobile: '',
                valid_shops_count: '',
                regist_number: '',
                used_car_count: '',
                ride_sharing_count: '',
                valid_informations_count: '',
                remark: ''
            },
            columnsList:[
                {
                    title: '系统id',
                    key: 'id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '圈子',
                    key: 'name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否有代理商',
                    key: 'agent_flag',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '是否是代理商',
                    key: 'agent_flag_name',
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
                    title: '代理商名称',
                    key: 'agent_name',
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
                    title: '店铺数',
                    key: 'valid_shops_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '会员数',
                    key: 'regist_number',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '二手车数',
                    key: 'used_car_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '顺风车数',
                    key: 'ride_sharing_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '信息数',
                    key: 'valid_informations_count',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '备注',
                    key: 'remark',
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
            this.queryForm.name = ''
            this.queryForm.agent_flag = ''
            this.queryForm.agent_flag_name = ''
            this.queryForm.CityName = ''
            this.queryForm.CountyName = ''
            this.queryForm.TownName = ''
            this.queryForm.agent_name = ''
            this.queryForm.mobile = ''
            this.queryForm.valid_shops_count = ''
            this.queryForm.regist_number = ''
            this.queryForm.used_car_count = ''
            this.queryForm.ride_sharing_count = ''
            this.queryForm.valid_informations_count = ''
            this.queryForm.remark = ''
            this.doQuery()
        },
        doSave () {
            let _self = this;
            util.ajax.post('/CircleManagement/CircleList/save', this.saveForm).then(function (res) {
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
                    util.ajax.post('/CircleManagement/CircleList/delete/' + id).then(function (res) {
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
            util.ajax.get('/CircleManagement/CircleList?page=' + this.page.current + '&limit=' + this.page.size).then(function (res) {
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
            util.ajax.get('/CircleManagement/CircleList/detail?id=' + id).then(function (res) {
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
            this.saveForm.name = ''
            this.saveForm.agent_flag = ''
            this.saveForm.agent_flag_name = ''
            this.saveForm.CityName = ''
            this.saveForm.CountyName = ''
            this.saveForm.TownName = ''
            this.saveForm.agent_name = ''
            this.saveForm.mobile = ''
            this.saveForm.valid_shops_count = ''
            this.saveForm.regist_number = ''
            this.saveForm.used_car_count = ''
            this.saveForm.ride_sharing_count = ''
            this.saveForm.valid_informations_count = ''
            this.saveForm.remark = ''
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