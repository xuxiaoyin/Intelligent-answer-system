var xmlHttp;
//键盘监听
function onKeyDown(str){
    if(window.event.keyCode == "13" && event.ctrlKey ){
        document.getElementById("search").value += "\n";
    }else if(window.event.keyCode == "13"){
        event.preventDefault();
        sendMessage(str);
    }
}
//发送一个消息
function sendMessage(str) {
    if(str==""){
        return
    }
    //添加信息
    document.getElementById('talk').innerHTML += `<div class="me" style="clear: both">
                                                <div class="i-talk">
                                                    <div class="me-chat">我</div>
                                                    <div class="content">${str}</div>
                                                    <span class="i-talk-cor"></span>
                                                </div>
                                            </div>`
    //清空输入框
    document.getElementById('search').value = '';


    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("恭喜您，您的浏览器不支持ajax！");
        return;
    }
    var url = "http://www.tuling123.com/openapi/api?key=00af5f988608401fa2d4030958f046ae";
    url = url + "&info=" + str;
    url = url + "&userid=1234";
    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}
//接收到一个消息
function stateChanged(){
	var oBtn1=document.getElementById('btn1');
	var oA=oBtn1.getElementsByTagName('a')[0]
	
	
    if(xmlHttp.readyState==4&&oA.getAttribute('onOff')==1){
        var msg=eval('('+xmlHttp.responseText+')');
        document.getElementById('talk').innerHTML += `<div class="robot" style="clear: both">
                                                        <div class="chat">
                                                            <div class="robot-icon" style="width:46px;height: 46px;"></div>
                                                            <div class="robot-response" >
                                                                <div class="robot-chat">
                                                                    <div>${msg.text}</div>
                                                                    <div class="judge">
                                                                    	<p>您对当前的回答满意吗?</p>
                                                                    	<div class="btn">
                                                                    		<input type="button" value="满意"/>
                                                                    		<input type="button" value="不满意"/>
                                                                    	</div>
	                                                                </div>
	                                                            </div>
                                                            </div>
                                                            <span class="robot-talk-cor"></span>
                                                        </div>
                                                    </div>`;
    }else if(xmlHttp.readyState==4&&oA.getAttribute('onOff')==2){
    	var msg=eval('('+xmlHttp.responseText+')');
        document.getElementById('talk').innerHTML += `<div class="robot" style="clear: both">
                                                        <div class="chat">
                                                            <div class="robot-icon" style="width:46px;height: 46px;"></div>
                                                            <div class="robot-response" >
                                                                <div class="robot-chat">
                                                                    <div>${msg.text}</div>
                                                                    <div class="judge" style="display:none;">
                                                                    	<p>您对当前的回答满意吗?</p>
                                                                    	<div class="btn">
                                                                    		<input type="button" value="满意"/>
                                                                    		<input type="button" value="不满意"/>
                                                                    	</div>
	                                                                </div>
	                                                            </div>
                                                            </div>
                                                            <span class="robot-talk-cor"></span>
                                                        </div>
                                                    </div>`;
    };
    
    document.getElementById("msg_end").click();
    document.getElementById('search').focus();
}

function GetXmlHttpObject(){
    var xmlHttp=null;
    try{
        xmlHttp=new XMLHttpRequest();
    }catch(e){
        try{
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

$(".hot-item").live("click",function(){
    var aa=$(this).attr("id");
    var testname=document.getElementById(aa).innerHTML;
    document.getElementById('talk').innerHTML += `<div class="me" style="clear: both">
                                                <div class="i-talk">
                                                    <div class="me-chat">我</div>
                                                    <div class="content">${testname}</div>
                                                    <span class="i-talk-cor"></span>
                                                </div>
                                            </div>`

    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("恭喜您，您的浏览器不支持ajax！");
        return;
    }
    var url = "http://www.tuling123.com/openapi/api?key=00af5f988608401fa2d4030958f046ae";
    url = url + "&info=" + testname;
    url = url + "&userid=1234";
    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    document.getElementById("msg_end").click();
})
