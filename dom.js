
    $(document).ready(function () {
        $("body").append(`<div id="gjlbox" style="width:300px;position: fixed;bottom: 10px;right: 10px;">
            <el-card shadow="always">
                <div slot="header">
                    <span>操作面板</span>
                </div>
                <el-input style="margin-bottom: 10px;" v-model="code" placeholder="请输入卡密" size="mini" clearable></el-input>
                <el-button size="mini" v-if="!flag" @click="shiong" type="primary">免费试用</el-button>
                <el-button size="mini" v-if="!flag" @click="init" type="primary">卡密提交</el-button>
                <el-button size="mini" v-if="flag" @click="start" type="primary">开始删除</el-button>
                <el-button size="mini" v-if="flag" @click="stop" type="danger">停止删除</el-button>
                <p style="font-size: 12px;color: red;">默认享受3次免费试用</p>
            </el-card>
        </div>`);
    });