
<style lang="less">
    @import '../../styles/common.less';
</style>
<template><div>
<Card>
    <p slot="title">
        <Icon type="clipboard"></Icon>
        C01F02A1会员信息详情
    </p>
    <Row>
        <Col span="24" class="small-title detail-subtitle-bar">基本信息</Col>
        <Col span="24" class="detail-line">
            <Col span="1">&nbsp;</Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">id：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.id }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">手机号：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.mobile }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">注册圈子系统ID：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.regist_circle_id }}</Col>
            </Col>
            <Col span="2">&nbsp;</Col>
        </Col>
        <Col span="24" class="detail-line">
            <Col span="1">&nbsp;</Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">昵称：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.nick_name }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">城市：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.CityName }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">县区：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.CountyName }}</Col>
            </Col>
            <Col span="2">&nbsp;</Col>
        </Col>
        <Col span="24" class="detail-line">
            <Col span="1">&nbsp;</Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">镇：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.TownName }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">是否开通：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.open_shop_flag }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">是否开通：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.open_shop_flag_name }}</Col>
            </Col>
            <Col span="2">&nbsp;</Col>
        </Col>
        <Col span="24" class="detail-line">
            <Col span="1">&nbsp;</Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">是否冻结：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.frozen_flag }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">积分级别：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.level }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">积分级别：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.level_name }}</Col>
            </Col>
            <Col span="2">&nbsp;</Col>
        </Col>
        <Col span="24" class="small-title detail-subtitle-bar">基本信息</Col>
        <Col span="24" class="detail-line">
            <Col span="1">&nbsp;</Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">积分：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.score }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">金币数量：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.coin }}</Col>
            </Col>
            <Col span="7">
                <Col span="12" class="detail-item-label">注册时间：</Col>
                <Col span="12" class="detail-item-value">{{ detailData.created_at }}</Col>
            </Col>
            <Col span="2">&nbsp;</Col>
        </Col>
    </Row>
    <Row>
        <Col span="20" style="text-align: center; margin-top: 20px;">
            <Button type="primary" icon="reply" @click="doBack">返回</Button>
        </Col>
    </Row>
</Card>
</div></template>
<script>
import util from '@/libs/util';
export default {
    data () {
        return {
            detailData: {}
        }
    },
    activated () {
        this.init()
    },
    methods: {
        init () {
            let _self = this
            util.ajax.get('MemberManagement/MemberDetail?id=' + this.$route.params.id).then(res => {
                if (res.status === 200) {
                    if (res.data.result === 1) {
                        _self.detailData = res.data.content
                    } else {
                        _self.$Message.error(res.data.message)
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        },
        doBack() {
            this.$router.go(-1)
        }
    }
}
</script>    
