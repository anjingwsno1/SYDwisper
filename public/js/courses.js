window.onload = function(){

    $("form").submit(function(e){
        window.location.href = '/index.html';
        searchContent = document.getElementById('Search').value;
        db.collection('courses').where('name', '==', searchContent).get().then((snapshot) => {
            if (snapshot.empty==false){
                renderCourseButton(snapshot.docs);
            }
        });
 
    });
}

// function renderCourseButton(doc){
//     let button = document.createElement('button');
//     let name = document.createElement('span');
//     name.textContent = "test";
//     courseButton = document.getElementById('courseButton');
//     button.appendChild(name);


//     courseButton.appendChild(button);
// }





//.where('name', '==', searchContent)
/*
db.collection('courses').get().then(snapshot => {
    alert("!!");
    if (snapshot.empty==false){
        renderCourseButton(snapshot.docs);
    }
});
*/








/* 
window.onload = ListenerSearch(); 

//实时监控搜索框文本输入事件 
function ListenerSearch(){ 
    var name = ['5001','5100','5200','5002','5003','IT','IT5002']; 
 

//实时监控文本输入 
    $("input:text").bind("input propertychange",function(){

        QueryKeyword($(this).val(),name);
    });
   
    
} 

//检索数组里是否有对应关键词 
function QueryKeyword(SearchName,ArrayList) { 
    //初始化数组 
    var Keyword = []; 
    
    //遍历数组内容 
    for(var i = 0; i < ArrayList.length; i++){ 
        //查询判断数组内是否包含关键词 
        if(SearchName.length != 0){ 
            //搜索框输入数据全等于数组内字符串参数 
            if(SearchName === ArrayList[i].substr(0,SearchName.length)){ 
                //添加数据 
                Keyword.push(ArrayList[i]);
            } 
        } 
    } 
    if(Keyword.length != 0){ 
        //创建table表单 
        CreateTable(Keyword); 
    } else { 
        //删除table表单 RemoveTable(); 
    } 
} 
//监控table表单点击事件,修改input内容 
function TableOnclick(id) { 
    $("#Search").val($("#"+id).html()); $("#Table").remove(); 
} 
//创建table表单 
function CreateTable(Keyword) { 
    var TableContent = ""; 
    for(var i = 0; i < Keyword.length; i++){ 
        TableContent += "" + "<tr>" + "<td id='"+i+"' onclick='TableOnclick(this.id)'>"+Keyword[i]+"</td>" + "</tr>"; 
    } 
    //table表单不存在时进行创建 
    if(!document.getElementById("#Table")){ 
        var Table = document.createElement('table'); Table.id = "Table"; $(".search").append(Table); 
    } 
    $("#Table").html(TableContent); 
} 
//删除table表单 
function RemoveTable() { 
    $("#Table").remove(); 
}
*/


