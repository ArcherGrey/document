
window.onload = () => {
    initializeContent();
}

function initializeContent() {
    new Vue({
        el: '#content',
        data: function () {
            return {
                input: '',
                isCollapse: true,
                tops:[
                    {
                        name:'前端',
                        subs:[
                            {
                                name:'javascript',
                                subs:[
                                    {
                                        name:'包装对象',
                                        src:'./doc/frontend/javascript/bzdx.md'
                                    },
                                    {
                                        name:'原型链',
                                        src:'./doc/frontend/javascript/prototype.md'
                                    },
                                    {
                                        name:'this',
                                        src:'./doc/frontend/javascript/this.md'
                                    },
                                    {
                                        name:'call | apply | bind',
                                        src:'./doc/frontend/javascript/cab.md'
                                    }
                                ]
                            },
                            {
                                name:'WebGL',
                                subs:[
                                    {
                                        name:'[threejs入门-1] hello,Three.js',
                                        src:'./doc/frontend/wengl/hello.md'
                                    },
                                    {
                                        name:'[threejs入门-2] 创造一个世界',
                                        src:'./doc/frontend/wengl/Building_a_world.md'
                                    },
                                    {
                                        name:'[threejs入门-3] 探索和互动',
                                        src:'./doc/frontend/wengl/Exploring_and_Interacting.md'
                                    }
                                ]
                            },
                            {
                                name:'html',
                                subs:[
                                    {
                                        name:'test',
                                        src:'./1.md'
                                    }
                                ]
                            },
                            {
                                name:'css',
                                subs:[
                                    {
                                        name:'test',
                                        src:'./1.md'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name:'后端',
                        subs:[
                            {
                                name:'C++',
                                subs:[
                                    {
                                        name:"test",
                                        src:"./1.md"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            Search: function () {
                // 搜索
                console.log(this.isCollapse);
                this.data = 1;
            },
            Showmenu: function () {
                // 显示侧栏
                this.isCollapse = false;
            },
            Hidemenu: function () {
                // 隐藏侧栏
                this.isCollapse = true;
            },
            Info: function () {
                this.$message('微信：douniwanzai 欢迎单身妹子加我');
            },
            ReadMarkdown: function (filename) {
                debugger
                // 读取 markdown 文件并且修改内容
                var xhr = new XMLHttpRequest();
                xhr.open('get', filename, true);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        src = xhr.responseText
                        document.getElementById('mark').innerHTML = marked(src);
                    }
                };
            }
        }
    })
}
