<template><div>
<Card>
    <Form :model="queryForm" :label-width="80">
        <Row>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="代理商" prop="agentName">
                    <Input type="text" v-model="queryForm.agentName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="物品名称" prop="name">
                    <Input type="text" v-model="queryForm.name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="物品价格" prop="price">
                    <Input type="text" v-model="queryForm.price"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="物品描述" prop="desc">
                    <Input type="text" v-model="queryForm.desc"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="物品图片地址" prop="files">
                    <Input type="text" v-model="queryForm.files"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="圈子" prop="circle_name">
                    <Input type="text" v-model="queryForm.circle_name"></Input>
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
                <FormItem label="会员名称" prop="memberName">
                    <Input type="text" v-model="queryForm.memberName"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="物品状态" prop="state_id">
                    <Select v-model="queryForm.state_id" clearable placeholder="请选择state_id" style="width:174px">
                        <Option v-for="item in dict.state_id" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="物品状态名称" prop="state_name">
                    <Input type="text" v-model="queryForm.state_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="上架时间" prop="putaway_date">
                    <DatePicker :value="queryForm.putaway_date" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择上架时间" style="width: 200px"></DatePicker>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="下架时间" prop="sold_out_date">
                    <DatePicker :value="queryForm.sold_out_date" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择下架时间" style="width: 200px"></DatePicker>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="首页显示" prop="homepage_flag">
                    <Select v-model="queryForm.homepage_flag" clearable placeholder="请选择homepage_flag" style="width:174px">
                        <Option v-for="item in dict.homepage_flag" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag">
                    <Select v-model="queryForm.putaway_flag" clearable placeholder="请选择putaway_flag" style="width:174px">
                        <Option v-for="item in dict.putaway_flag" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="是否上下架名称" prop="putaway_flag_name">
                    <Input type="text" v-model="queryForm.putaway_flag_name"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="会员id" prop="memberID">
                    <Input type="text" v-model="queryForm.memberID"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="会员头像url" prop="memberAvatarUrl">
                    <Input type="text" v-model="queryForm.memberAvatarUrl"></Input>
                </FormItem>
            </Col>
            <Col span="6" style="margin-bottom: -15px;">
                <FormItem label="本圈上架状态" prop="isPutOn">
                    <Select v-model="queryForm.isPutOn" clearable placeholder="请选择isPutOn" style="width:174px">
                        <Option v-for="item in dict.isPutOn" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="7" style="text-align: center; margin-bottom: -15px;">
                <FormItem>
                    <Button type="primary" icon="android-search" @click="doQuery">查询</Button>
                    <Button type="error" icon="android-refresh" @click="doClear">清空</Button>
                    <Button type="success" icon="archive" @click="doExport">导出</Button>
                </FormItem>
            </Col>
        </Row>
    </Form>
</Card>
<Modal width="700" v-model="saveModal.show" loading @on-ok="doSave" :title="saveModal.title">
        <Form :model="saveForm" :label-width="80" >
        <Row>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="代理商" prop="agentName">
                    <Input type="text" v-model="saveForm.agentName" placeholder="请输入代理商"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="物品名称" prop="name">
                    <Input type="text" v-model="saveForm.name" placeholder="请输入物品名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="物品价格" prop="price">
                    <Input type="text" v-model="saveForm.price" placeholder="请输入物品价格"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="物品描述" prop="desc">
                    <Input type="text" v-model="saveForm.desc" placeholder="请输入物品描述"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="物品图片地址" prop="files">
                    <Input type="text" v-model="saveForm.files" placeholder="请输入物品图片地址"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="圈子" prop="circle_name">
                    <Input type="text" v-model="saveForm.circle_name" placeholder="请输入圈子"></Input>
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
                <FormItem label="会员名称" prop="memberName">
                    <Input type="text" v-model="saveForm.memberName" placeholder="请输入会员名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="物品状态" prop="state_id">
                    <Input type="text" v-model="saveForm.state_id" placeholder="请输入物品状态"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="物品状态名称" prop="state_name">
                    <Input type="text" v-model="saveForm.state_name" placeholder="请输入物品状态名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="上架时间" prop="putaway_date">
                    <Input type="text" v-model="saveForm.putaway_date" placeholder="请输入上架时间"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="下架时间" prop="sold_out_date">
                    <Input type="text" v-model="saveForm.sold_out_date" placeholder="请输入下架时间"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="首页显示" prop="homepage_flag">
                    <Input type="text" v-model="saveForm.homepage_flag" placeholder="请输入首页显示"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否上下架" prop="putaway_flag">
                    <Input type="text" v-model="saveForm.putaway_flag" placeholder="请输入是否上下架"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="是否上下架名称" prop="putaway_flag_name">
                    <Input type="text" v-model="saveForm.putaway_flag_name" placeholder="请输入是否上下架名称"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="会员id" prop="memberID">
                    <Input type="text" v-model="saveForm.memberID" placeholder="请输入会员id"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="会员头像url" prop="memberAvatarUrl">
                    <Input type="text" v-model="saveForm.memberAvatarUrl" placeholder="请输入会员头像url"></Input>
                </FormItem>
            </Col>
            <Col span="10" style="margin-bottom: -15px;">
                <FormItem label="本圈上架状态" prop="isPutOn">
                    <Input type="text" v-model="saveForm.isPutOn" placeholder="请输入本圈上架状态"></Input>
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
                agentName: '',
                name: '',
                price: '',
                desc: '',
                files: '',
                circle_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                memberName: '',
                state_id: '',
                state_name: '',
                putaway_date: [],
                sold_out_date: [],
                homepage_flag: '',
                putaway_flag: '',
                putaway_flag_name: '',
                memberID: '',
                memberAvatarUrl: '',
                isPutOn: ''
            },
            saveForm: {
                id: '',
                agentName: '',
                name: '',
                price: '',
                desc: '',
                files: '',
                circle_name: '',
                CityName: '',
                CountyName: '',
                TownName: '',
                memberName: '',
                state_id: '',
                state_name: '',
                putaway_date: '',
                sold_out_date: '',
                homepage_flag: '',
                putaway_flag: '',
                putaway_flag_name: '',
                memberID: '',
                memberAvatarUrl: '',
                isPutOn: ''
            },
            columnsList:[
                {
                    title: '内部id',
                    key: 'id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '代理商',
                    key: 'agentName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '物品名称',
                    key: 'name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '物品价格',
                    key: 'price',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '物品描述',
                    key: 'desc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '物品图片地址',
                    key: 'files',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '圈子',
                    key: 'circle_name',
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
                    title: '会员名称',
                    key: 'memberName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '物品状态',
                    key: 'state_id',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '物品状态名称',
                    key: 'state_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '上架时间',
                    key: 'putaway_date',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '下架时间',
                    key: 'sold_out_date',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '首页显示',
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
                    title: '是否上下架名称',
                    key: 'putaway_flag_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '会员id',
                    key: 'memberID',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '会员头像url',
                    key: 'memberAvatarUrl',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '本圈上架状态',
                    key: 'isPutOn',
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
            },
            dict: {
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
            this.queryForm.agentName = ''
            this.queryForm.name = ''
            this.queryForm.price = ''
            this.queryForm.desc = ''
            this.queryForm.files = ''
            this.queryForm.circle_name = ''
            this.queryForm.CityName = ''
            this.queryForm.CountyName = ''
            this.queryForm.TownName = ''
            this.queryForm.memberName = ''
            this.queryForm.state_id = ''
            this.queryForm.state_name = ''
            this.queryForm.putaway_date = []
            this.queryForm.sold_out_date = []
            this.queryForm.homepage_flag = ''
            this.queryForm.putaway_flag = ''
            this.queryForm.putaway_flag_name = ''
            this.queryForm.memberID = ''
            this.queryForm.memberAvatarUrl = ''
            this.queryForm.isPutOn = ''
            this.doQuery()
        },
        doSave () {
            let _self = this;
            util.ajax.post('/GoodManagement/save', this.saveForm).then(res => {
                _self.saveModal.show = false
                _self.$Message.info('操作成功')
                _self.doQuery()
              }).catch(err => {
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
                    util.ajax.post('/GoodManagement/delete/' + id).then(res => {
                        _modal.remove()
                        if (res.status === 200) {
                            if (res.data.code === "0") {
                                _self.$Message.info('操作成功')
                                _self.getList()
                            }
                        }
                    }).catch(err => {
                        _modal.remove()
                        console.log(err)
                    })
                }
            })
        },
        doExport () {
            let _self = this
            util.ajax.post('/GoodManagement/Export', this.processQueryForm()).then(res => {
                if (res.status === 200) {
                    if (res.data.result === 1) {
                        window.open(res.data.content)
                    } else {
                        _self.$Message.error(res.data.message)
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        },
        getList () {
            let _self = this
            util.ajax.get('/GoodManagement?page=' + this.page.current + '&limit=' + this.page.size, {params: this.processQueryForm()}).then(res => {
                if (res.status === 200) {
                    if (res.data.result === 1) {
                        _self.tableData = res.data.content.data
                        _self.page.total = res.data.content.total
                        _self.page.size = res.data.content.per_page
                        _self.page.current = res.data.content.current_page
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        },
        processQueryForm () {
            return this.queryForm
        },
        showModalAdd() {
            this.clearSaveForm()
            this.saveModal.title = '添加[C01F07]物品管理后台'
            this.saveModal.show = true
        },
        showModalUpdate(id) {
            let _self = this
            util.ajax.get('/GoodManagement/detail?id=' + id).then(res => {
                if (res.status === 200) {
                    if (res.data.code === "0") {
                        _self.saveForm = res.data.data
                    }
                }
            }).catch(err => {
                console.log(err)
              })
            this.saveModal.show = true
            this.saveModal.title = '修改[C01F07]物品管理后台'
        },
        clearSaveForm () {
            this.saveForm.id = ''
            this.saveForm.agentName = ''
            this.saveForm.name = ''
            this.saveForm.price = ''
            this.saveForm.desc = ''
            this.saveForm.files = ''
            this.saveForm.circle_name = ''
            this.saveForm.CityName = ''
            this.saveForm.CountyName = ''
            this.saveForm.TownName = ''
            this.saveForm.memberName = ''
            this.saveForm.state_id = ''
            this.saveForm.state_name = ''
            this.saveForm.putaway_date = ''
            this.saveForm.sold_out_date = ''
            this.saveForm.homepage_flag = ''
            this.saveForm.putaway_flag = ''
            this.saveForm.putaway_flag_name = ''
            this.saveForm.memberID = ''
            this.saveForm.memberAvatarUrl = ''
            this.saveForm.isPutOn = ''
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
