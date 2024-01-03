  let that;
    new Vue({
        el: '#gjlbox',
        data: function () {
            return {
                code: '',
                inter: null,
                flag: false,
                codeArr: ['1']
            }
        },
        created() {
            that = this;
        },
        methods: {
            shiong() {
                let that = this
                if (window.localStorage.getItem('number')) {
                    window.localStorage.setItem('number', Number(localStorage.getItem('number')) + 1);
                } else {
                    window.localStorage.setItem('number', 1);
                }

                if (window.localStorage.getItem('number') >= 4) {
                    this.stop();
                    this.$message({
                        type: 'error',
                        message: '您已使用3次免费试用'
                    });
                    return
                } else {
                    this.start()
                    setTimeout(() => {
                        that.stop();
                        that.$message({
                            type: 'error',
                            message: '单次试用结束'
                        });
                    }, 3000)

                }
            },
            init() {
                if (!this.code) {
                    that.$message({
                        type: 'error',
                        message: '请输入正确卡密'
                    });
                    return
                }
                if (this.codeArr.includes(this.code)) {
                    that.flag = true
                } else {
                    that.$message({
                        type: 'error',
                        message: '卡密不正确'
                    });
                }
            },
            start() {
                if (this.codeArr.includes(this.code)) {
                    that.flag = true
                } else {
                    that.$message({
                        type: 'error',
                        message: '卡密不正确'
                    });
                }
                this.stop();
                let that = this;
                this.inter = setInterval(() => {
                    let obj = document
                        .querySelector(
                            "#scroller > div.vue-recycle-scroller__item-wrapper > div:nth-child(1) > div > article > div > header > div.woo-box-flex > div.woo-pop-wrap.morepop_more_3ssan > span > div > i"
                        )
                    if (obj) {
                        obj.click();
                        setTimeout(() => {
                            let divs = document.querySelector(
                                "#scroller > div.vue-recycle-scroller__item-wrapper > div:nth-child(1) > div > article > div.Feed_body_3R0rO > header > div.woo-box-flex > div.woo-pop-wrap.morepop_more_3ssan > div > div > div > div > div.woo-box-flex.woo-box-justifyBetween"
                            );
                            for (let i = 0; i < divs.length; i++) {
                                if (divs[i].textContent === "删除") {
                                    divs[i].click();
                                    break;
                                }
                            }
                        }, 200);
                        setTimeout(() => {
                            document
                                .querySelector(
                                    "#app > div:nth-child(4) > div.woo-modal-main > div > div.woo-dialog-ctrl > button.woo-button-main.woo-button-flat.woo-button-primary.woo-button-m.woo-button-round.woo-dialog-btn"
                                )
                                .click();
                        }, 500);
                    } else {
                        that.$message({
                            type: 'error',
                            message: '未找到要删除信息！！！'
                        });
                    }
                }, 1000);
            },
            stop() {
                try {
                    clearInterval(this.inter);
                } catch (e) {
                    console.log(e);
                }
            }
        },
    })