<script>
$(document).ready(function() {
	afterAjax();
});

var yearDataList = [];
var capitalList = [];
var salamtList = [];
var netincmList = [];

//기업컨텐츠 정보
function afterAjax(){
	
	var imagePath = $("#imagePath").val();

	$.ajax({
		type			: 'GET'
		,async			: false
		,url			: "/egf/ext/empmn/selectEntntsInfoAjax"
		,contentType	: "application/x-www-form-urlencoded; charset=UTF-8"
		,data			: {
			 "bizrno" : $("#bizrno").val(),
			 "previewYn" : ""
		}
		,dataType		: "json"
		,success		: (
			function(obj) {
				
				if(obj.ENT_CNTNTS != null) {
	
					var ENT_CNTNTS = obj.ENT_CNTNTS;
					
					//사업자번호
					var bizrno = ENT_CNTNTS.bizrno;
					$(".comNum").html(bizrno);
					//사업장명(기업명)
					var entNm = isNull(ENT_CNTNTS.entNm) ? ENT_CNTNTS.entNm : "비공개";
					$(".comName").html(entNm);
					//사업주명(대표자명)
					var korCeoNm = isNull(ENT_CNTNTS.korCeoNm) ? ENT_CNTNTS.korCeoNm : "비공개";
					$(".ceo").html(korCeoNm);
					//사업장 주소
					var regionCode = isNull(ENT_CNTNTS.regionCode) ? ENT_CNTNTS.regionCode : "비공개";
					var hdqtrKorAdrs = isNull(ENT_CNTNTS.hdqtrKorAdrs) ? ENT_CNTNTS.hdqtrKorAdrs : "비공개";
					var hdqtrKorDetailAdrs = isNull(ENT_CNTNTS.hdqtrKorDetailAdrs) ? ENT_CNTNTS.hdqtrKorDetailAdrs : "비공개";
					var fullAdd = hdqtrKorAdrs+" "+hdqtrKorDetailAdrs;
					$(".address").html(fullAdd);
				    $(".comAddress").html(hdqtrKorAdrs);
					//카테고리
					var clNm = isNull(ENT_CNTNTS.clNm) ? ENT_CNTNTS.clNm : "비공개";
					//업종
					var ksicNm = isNull(ENT_CNTNTS.ksicNm) ? ENT_CNTNTS.ksicNm : "비공개";
					$(".incCate").html(ksicNm);
					//설립일
					var entStdDe = isNull(ENT_CNTNTS.entStdDe) ? ENT_CNTNTS.entStdDe : "비공개";
					$(".comBuildDate").html(entStdDe);
					//기업등급
					var credGrd = isNull(ENT_CNTNTS.credGrd) ? ENT_CNTNTS.credGrd : "비공개";
					//사업장 전화번호
					var hdqtrTelno = isNull(ENT_CNTNTS.hdqtrTelno) ? ENT_CNTNTS.hdqtrTelno : "비공개";
					var telLink = "<a href='tel:"+hdqtrTelno+"'>"+hdqtrTelno+"</a>";
					 $(".tel").html(telLink);
					//대표 이메일
					var email = isNull(ENT_CNTNTS.email) ? ENT_CNTNTS.email : "비공개";
					//담당자
					var mngNm = isNull(ENT_CNTNTS.mngNm) ? ENT_CNTNTS.mngNm : "비공개";
					$(".manager").html(mngNm);
					//담당자 연락처
					var mngTelno = isNull(ENT_CNTNTS.mngTelno) ? ENT_CNTNTS.mngTelno : "비공개";
					$(".mngTelno").html(mngTelno);
					//담당자 이메일
					var mngEmail = isNull(ENT_CNTNTS.mngEmail) ? ENT_CNTNTS.mngEmail : "비공개";
					var mngEmailLink = "<a href='mailto:"+mngEmail+"' target='_blank'>"+mngEmail+"</a>";
					$(".mngEmail").html(mngEmailLink);
					//홈페이지
					var hompUrl = ENT_CNTNTS.hompUrl;
					var siteLink = "<a href='"+hompUrl+"' target='_blank'>"+hompUrl+"</a>";
				    var siteLink2 = "<a href='"+hompUrl+"' target='_blank'>홈페이지 바로가기</a>";
				    $(".site").html(siteLink);
				    $(".siteGo").html(siteLink2);
					
					//로고
					var logoImageSave = imagePath+ENT_CNTNTS.logoImageSave;
					if(ENT_CNTNTS.logoImageSave != "" && ENT_CNTNTS.logoImageSave != null && ENT_CNTNTS.logoImageSave != "null"){
						 var imgCi = "<img src='"+logoImageSave+"' alt='"+entNm+"'/>";
			             $(".imgCi").html(imgCi);
					}
					//기업대표이미지
					var entImageSave = imagePath+ENT_CNTNTS.entImageSave;
					if(entImageSave != ""){
					    var imgCom = "<img src='"+entImageSave+"' alt='"+entNm+"'/>";
					    $(".imgCom").html(imgCom);
					}
					
					//기업대표문구
					var entReptCmmt = ENT_CNTNTS.entReptCmmt;
					$(".entReptCmmt").html(entReptCmmt);
					//기업대표컬러(RGB)
					var entReptColor = ENT_CNTNTS.entReptColor;
					//태그
					var tag = ENT_CNTNTS.tag;
					//홍보영상
					var prmtnMvUrl = ENT_CNTNTS.prmtnMvUrl;
					var comMov = "<iframe src='"+prmtnMvUrl+"' title='YouTube video player' frameborder='0' allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture' allowfullscreen></iframe>";
					$(".comMov").html(comMov);

					//인터뷰영상
					var interviewMvUrl = ENT_CNTNTS.interviewMvUrl;
					var interviewMov = "<iframe src='"+interviewMvUrl+"' title='YouTube video player' frameborder='0' allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture' allowfullscreen></iframe>";
					$(".interviewMov").html(interviewMov);
					
					//기업비전
					var entVision = ENT_CNTNTS.entVision;
					$(".vision").html(entVision);
					//기업미션
					var entMission = ENT_CNTNTS.entMission;
					$(".mission").html(entMission);
					//기업슬로건
					var slogan = ENT_CNTNTS.slogan;
					$(".slogan").html(slogan);
					//인재상
					var talent = ENT_CNTNTS.talent;
					//$(".talent").html(talent);
					//SWOT---
					var swotS = ENT_CNTNTS.swotS;
					var swotW = ENT_CNTNTS.swotW;
					var swotO = ENT_CNTNTS.swotO;
					var swotT = ENT_CNTNTS.swotT;
					var swot = "";
				        swot += "<strong>S</strong> : "+swotS+"</br/>";
				        swot += "<strong>W</strong> : "+swotW+"</br/>";
				        swot += "<strong>O</strong> : "+swotO+"</br/>";
				        swot += "<strong>T</strong> : "+swotT+"</br/>";
				    $(".swot").html(swot);
				    $(".swotS .desc").html(swotS);
				    $(".swotW .desc").html(swotW);
				    $(".swotO .desc").html(swotO);
				    $(".swotT .desc").html(swotT);
					
					//산업내위치---
					//활동성
					var bpActivity = isNull(ENT_CNTNTS.bpActivity) ? ENT_CNTNTS.bpActivity : "비공개";
					$(".bpActivity").html(bpActivity);
					//수익성
					var bpProfitability = isNull(ENT_CNTNTS.bpProfitability) ? ENT_CNTNTS.bpProfitability : "비공개";
					$(".bpProfitability").html(bpProfitability);
					//안정성
					var bpStability = isNull(ENT_CNTNTS.bpStability) ? ENT_CNTNTS.bpStability : "비공개";
					$(".bpStability").html(bpStability);
					//성장성
					var bpGrowthability = isNull(ENT_CNTNTS.bpGrowthability) ? ENT_CNTNTS.bpGrowthability : "비공개";
					$(".bpGrowthability").html(bpGrowthability);
					//규모
					var bpScale = isNull(ENT_CNTNTS.bpScale) ? ENT_CNTNTS.bpScale : "비공개";
					$(".bpScale").html(bpScale);
					
					//-------------------------------------------
					//기업인증
					var kangsoF = ENT_CNTNTS.kangsoF;
					var youngF = ENT_CNTNTS.youngF;
					var certified = "";
				    if ( kangsoF == "Y" ) {
				        certified += "<span>강소기업</span>";
				    }
				    if ( youngF == "Y" ) {
				        certified += "<span>청년친화기업</span>";
				    }
				    certified = isNull(certified) ? certified : "비공개" ;
				    $(".certified").html(certified);
					
					//기업평가등급
					var credGrd = isNull(ENT_CNTNTS.credGrd) ? ENT_CNTNTS.credGrd : "비공개" ;
					$(".bizGrade").html(credGrd);
					
					//동종업계순위
					var fiPosition = ENT_CNTNTS.fiPosition;
					if(fiPosition != null && fiPosition != ""){
						$(".fiPosition").html(fiPosition+"위");
					}else{
						$(".fiPosition").html("비공개");
					}
					//기업정보(구nice)
					//첫번째 정보는 상단에 매출액,종업원,자본금으로 같이사용
					var gnrlInfoList = obj.gnrlInfoList;
					var gnrlInfoCnt = gnrlInfoList.length;

					if(gnrlInfoCnt > 0){
						//0번으로 상담 매출액 종업원 자본금 당기순이익
						if(gnrlInfoList[0].salamt != null && gnrlInfoList[0].salamt != ""){
							$(".fiSales").html(numberWithCommas(Math.floor(gnrlInfoList[0].salamt / 1000000)));
						}else{
							$(".fiSales").html("비공개");	
						}
						if(gnrlInfoList[0].annlTotalNmpr != null && gnrlInfoList[0].annlTotalNmpr != ""){
							$(".employeeState").html(numberWithCommas(gnrlInfoList[0].annlTotalNmpr));
						}else{
							$(".employeeState").html("비공개");
						}
						if(gnrlInfoList[0].capital != null && gnrlInfoList[0].capital != ""){
							$(".fiCapital").html(numberWithCommas(Math.floor(gnrlInfoList[0].capital / 1000000)));
						}else{
							$(".fiCapital").html("비공개");
						}
						if(gnrlInfoList[0].netincm != null && gnrlInfoList[0].netincm != ""){
							$(".fiNetincm").html(numberWithCommas(Math.floor(gnrlInfoList[0].netincm / 1000000)));
						}else{
							$(".fiNetincm").html("비공개");
						}
						
						yearDataList = [];
                        capitalList = [];
                        salamtList = [];
                        netincmList = [];
                        capitalList.push("자본금");
                        salamtList.push("매출액");
                        netincmList.push("당기순이익");
						
						//재무정보
						for(var i=0 ; i<gnrlInfoList.length ; i++){
							yearDataList.push(gnrlInfoList[i].stdDe);
							capitalList.push(Math.floor(gnrlInfoList[i].capital / 1000000));
                            salamtList.push(Math.floor(gnrlInfoList[i].salamt / 1000000));
                            netincmList.push(Math.floor(gnrlInfoList[i].netincm / 1000000));
						}						
						
					}else{
						$(".fiSales").html("비공개");
						$(".employeeState").html("비공개");
						$(".fiCapital").html("비공개");
						$(".fiNetincm").html("비공개");
					}
					
					

					//기업 기초자료--------------------------------
					//기업연혁
					var historyList = obj.historyList;
	                var historyCnt = historyList.length;

	                if(historyCnt > 0){
	                    var historyYear = "";//연혁 년도
	                    var historyMonth = "";//연혁 월
	                    var historyCntnt = "";//연혁 내용

	                    var history = "";
	                    var historyCntntSplit = null;
	                    var yearNow = "";//현재 년도 데이터
	                    var yearChg = "";//다음 년도 데이터

	                    //연혁 탭
	                    var historyTab = "";

	                    for(var i=0; i<historyCnt; i++){
	                        historyYear = historyList[i].stdYy;

	                        yearChg = historyYear;//변경년도

	                        if(i > 0){
	                            if(yearChg != yearNow){
	                                history += "</ul></div>";
	                            }
	                        }
	                        if(yearChg != yearNow){
	                            if(i == 0){
	                                historyTab += "<a href='javascript:;' data-tab='"+historyYear+"' class='on'>"+historyYear+"</a>";
	                            }else{
	                                historyTab += "<a href='javascript:;' data-tab='"+historyYear+"'>"+historyYear+"</a>";
	                            }
	                            history += "<div class='"+historyYear+"'><span>"+historyYear+"</span><ul>";
	                        }
	                        historyMonth = historyList[i].stdMm;
	                        //console.log("연혁 월"+i+" : " + historyMonth);
	                        history += "<li><div class='month'>"+historyMonth+"</div><div class='event'>";
	                        historyCntnt = historyList[i].cnts;
	                        historyCntntSplit = historyCntnt.split("::");
	                        for(var j=0 ; j<historyCntntSplit.length ; j++){
	                            history += "<span>"+historyCntntSplit[j]+"</span>";
	                        }
	                        history += "</div></li>";

	                        yearNow = historyYear;//현재년도
	                    }
	                }
	                $(".history").html(history);
	                $(".history_tabs").html(historyTab);
	                
					
	                //핵심가치
	                var rtnEntCntntsAditDtail1 = obj.rtnEntCntntsAditDtail1
	                var coreValueStr = "";
	                if(rtnEntCntntsAditDtail1 != null){
	                    for(var i=0; i<rtnEntCntntsAditDtail1.length; i++){
	                    	coreValueStr += "<li class=\"list\">";
	                    		if(rtnEntCntntsAditDtail1[i].addTitle != null && rtnEntCntntsAditDtail1[i].addTitle != ""){
	                    			coreValueStr += "<p class=\"tit\">"+rtnEntCntntsAditDtail1[i].addTitle+"</p>"
	                    		}
	                    		if(rtnEntCntntsAditDtail1[i].addCntnt != null && rtnEntCntntsAditDtail1[i].addCntnt != ""){
	                    			coreValueStr += "<span class=\"desc\">"+rtnEntCntntsAditDtail1[i].addCntnt+"</span>"
	                    		}	                    		
	                    	coreValueStr += "</li>";
	                    }
	                }   
	                $(".keyValue").html(coreValueStr);
	                
	                //전략과제
	                var rtnEntCntntsAditDtail2 = obj.rtnEntCntntsAditDtail2
	                var keyTaskStr = "";
	                if(rtnEntCntntsAditDtail2 != null){
	                    for(var i=0; i<rtnEntCntntsAditDtail2.length; i++){
	                    	keyTaskStr += "<li class=\"list\">";
	                    		if(rtnEntCntntsAditDtail2[i].addTitle != null && rtnEntCntntsAditDtail2[i].addTitle != ""){
	                    			keyTaskStr += "<p class=\"tit\">"+rtnEntCntntsAditDtail2[i].addTitle+"</p>"
	                    		}
	                    		if(rtnEntCntntsAditDtail2[i].addCntnt != null && rtnEntCntntsAditDtail2[i].addCntnt != ""){
	                    			keyTaskStr += "<span class=\"desc\">"+rtnEntCntntsAditDtail2[i].addCntnt+"</span>"
	                    		}	                    		
	                    	keyTaskStr += "</li>";
	                    }
	                }   
	                $(".keyTask").html(keyTaskStr);
	                
	                //복지---
	                //조직문화
	                var rtnEntCntntsAditDtail16 = obj.rtnEntCntntsAditDtail16
	                var dvCulture = "";
	                if(rtnEntCntntsAditDtail16 != null){
		                for(var i=0; i<rtnEntCntntsAditDtail16.length; i++){
		                    dvCulture += "<div class='item dvCulture_" + i + "'>";
		                    dvCulture += "	<div class='info'>";
		                    if(rtnEntCntntsAditDtail16[i].addTitle != null && rtnEntCntntsAditDtail16[i].addTitle != ""){
		                    	dvCulture += "		<div class='tit'>"+rtnEntCntntsAditDtail16[i].addTitle+"</div>";
		                    }
		                    if(rtnEntCntntsAditDtail16[i].addCntnt != null && rtnEntCntntsAditDtail16[i].addCntnt != ""){
		                    	dvCulture += "		<div class='desc'>"+rtnEntCntntsAditDtail16[i].addCntnt+"</div>";
		                    }
		                    dvCulture += "	</div>";
		                    dvCulture += "</div>";
		                }
	                }
	                $(".dvCulture").html(dvCulture);
	                
	                //복리후생
	                var welfare = "";
	                if(ENT_CNTNTS.deductionNm != null && ENT_CNTNTS.deductionNm != ""){
	                	var deduct = [];
	                	deduct = ENT_CNTNTS.deductionNm.split(",");
	                	if ( deduct.length > 0 ){
	                		welfare += "<div class='item deduct'>";
		                    welfare += "<dl><dt>공제</dt>";
		                    for(var i=0; i<deduct.length; i++){
		                        welfare += "<dd>"+deduct[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
	                	}
					}
	                if(ENT_CNTNTS.pnsnInsuNm != null && ENT_CNTNTS.pnsnInsuNm != ""){
	                	var insurance = [];
	                	insurance = ENT_CNTNTS.pnsnInsuNm.split(",");
	                	if ( insurance.length > 0 ){
		                    welfare += "<div class='item insurance'>";
		                    welfare += "<dl><dt>연금/보험</dt>";
		                    for(var i=0; i<insurance.length; i++){
		                        welfare += "<dd>"+insurance[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}
	                if(ENT_CNTNTS.trainingNm != null && ENT_CNTNTS.trainingNm != ""){
	                	var education = [];
	                	education = ENT_CNTNTS.trainingNm.split(",");
	                	if ( education.length > 0 ){
		                    welfare += "<div class='item education'>";
		                    welfare += "<dl><dt>교육/연수</dt>";
		                    for(var i=0; i<education.length; i++){
		                        welfare += "<dd>"+education[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}
	                if(ENT_CNTNTS.cnvnLifeNm != null && ENT_CNTNTS.cnvnLifeNm != ""){
	                	var convenience = [];
	                	convenience = ENT_CNTNTS.cnvnLifeNm.split(",");
	                	if ( convenience.length > 0 ){
		                    welfare += "<div class='item convenience'>";
		                    welfare += "<dl><dt>생활편의</dt>";
		                    for(var i=0; i<convenience.length; i++){
		                        welfare += "<dd>"+convenience[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}
	                if(ENT_CNTNTS.leisureEventNm != null && ENT_CNTNTS.leisureEventNm != ""){
	                	var leisure = [];
	                	leisure = ENT_CNTNTS.leisureEventNm.split(",");
	                	if ( leisure.length > 0 ){
		                    welfare += "<div class='item leisure'>";
		                    welfare += "<dl><dt>여가/행사</dt>";
		                    for(var i=0; i<leisure.length; i++){
		                        welfare += "<dd>"+leisure[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}
	                
	                if(ENT_CNTNTS.rwrdAlwncNm != null && ENT_CNTNTS.rwrdAlwncNm != ""){
	                	var reward = [];
	                	reward = ENT_CNTNTS.rwrdAlwncNm.split(",");
	                	if ( reward.length > 0 ){
		                    welfare += "<div class='item reward'>";
		                    welfare += "<dl><dt>보상/수당</dt>";
		                    for(var i=0; i<reward.length; i++){
		                        welfare += "<dd>"+reward[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}
	                if(ENT_CNTNTS.inCmpFcltNm != null && ENT_CNTNTS.inCmpFcltNm != ""){
	                	var facilities = [];
	                	facilities = ENT_CNTNTS.inCmpFcltNm.split(",");
	                	if ( facilities.length > 0 ){
		                    welfare += "<div class='item facilities'>";
		                    welfare += "<dl><dt>사내시설</dt>";
		                    for(var i=0; i<facilities.length; i++){
		                        welfare += "<dd>"+facilities[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}
	                if(ENT_CNTNTS.vctHldNm != null && ENT_CNTNTS.vctHldNm != ""){
	                	var holiday = [];
	                	holiday = ENT_CNTNTS.vctHldNm.split(",");
	                	if ( holiday.length > 0 ){
		                    welfare += "<div class='item holiday'>";
		                    welfare += "<dl><dt>휴무/휴가</dt>";
		                    for(var i=0; i<holiday.length; i++){
		                        welfare += "<dd>"+holiday[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}
	                if(ENT_CNTNTS.sprtDsbldNm != null && ENT_CNTNTS.sprtDsbldNm != ""){
	                	var handicap = [];
	                	handicap = ENT_CNTNTS.sprtDsbldNm.split(",");
	                	if ( handicap.length > 0 ){
		                    welfare += "<div class='item handicap'>";
		                    welfare += "<dl><dt>장애인지원</dt>";
		                    for(var i=0; i<handicap.length; i++){
		                        welfare += "<dd>"+handicap[i]+"</dd>";
		                    }
		                    welfare += "</dl>";
		                    welfare += "</div>";
		                }
					}         
	                
	                if ( (ENT_CNTNTS.etc1 != null && ENT_CNTNTS.etc1 != "") || (ENT_CNTNTS.etc2 != null && ENT_CNTNTS.etc2 != "") || (ENT_CNTNTS.etc3 != null && ENT_CNTNTS.etc3 != "")
	                || (ENT_CNTNTS.etc4 != null && ENT_CNTNTS.etc4 != "") || (ENT_CNTNTS.etc5 != null && ENT_CNTNTS.etc5 != "") || (ENT_CNTNTS.etc6 != null && ENT_CNTNTS.etc6 != "")
	                || (ENT_CNTNTS.etc7 != null && ENT_CNTNTS.etc7 != "") || (ENT_CNTNTS.etc8 != null && ENT_CNTNTS.etc8 != "") || (ENT_CNTNTS.etc9 != null && ENT_CNTNTS.etc9 != "")
	                || (ENT_CNTNTS.etc10 != null && ENT_CNTNTS.etc10 != "")
	                ){
	                    welfare += "<div class='item etc'>";
	                    welfare += "<dl><dt>기타</dt>";
	                    if(ENT_CNTNTS.etc1 != null && ENT_CNTNTS.etc1 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc1+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc2 != null && ENT_CNTNTS.etc2 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc2+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc3 != null && ENT_CNTNTS.etc3 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc3+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc4 != null && ENT_CNTNTS.etc4 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc4+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc5 != null && ENT_CNTNTS.etc5 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc5+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc6 != null && ENT_CNTNTS.etc6 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc6+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc7 != null && ENT_CNTNTS.etc7 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc7+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc8 != null && ENT_CNTNTS.etc8 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc8+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc9 != null && ENT_CNTNTS.etc9 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc9+"</dd>";
	                    }
	                    if(ENT_CNTNTS.etc10 != null && ENT_CNTNTS.etc10 != ""){
	                        welfare += "<dd>"+ENT_CNTNTS.etc10+"</dd>";
	                    }
	                    welfare += "</dl>";
	                    welfare += "</div>";
	                }
	                $(".welfare").html(welfare);
	                
	                //인터뷰--
	                //대표이사
	                var ivCeoPhoto = ENT_CNTNTS.ceoImageSave;
	                if(ivCeoPhoto != null && ivCeoPhoto != ""){
	                	ivCeoPhoto = "<img src='"+imagePath+ENT_CNTNTS.ceoImageSave+"' alt='대표이사'>";
	                }
	                $(".ivCeoPhoto").html(ivCeoPhoto);
	                
	                var rtnEntCntntsAditDtail5 = obj.rtnEntCntntsAditDtail5
	                var ivCeo = "";
	                if(rtnEntCntntsAditDtail5 != null && rtnEntCntntsAditDtail5 != ""){	                
		                for(var i=0; i<rtnEntCntntsAditDtail5.length; i++){
		                	ivCeo += "<div>";
		                    if(rtnEntCntntsAditDtail5[i].addTitle != null && rtnEntCntntsAditDtail5[i].addTitle != ""){
		                    	 ivCeo += "<div class='q'>"+rtnEntCntntsAditDtail5[i].addTitle+"</div>";
		                    }
		                    if(rtnEntCntntsAditDtail5[i].addCntnt != null && rtnEntCntntsAditDtail5[i].addCntnt != ""){
		                    	 ivCeo += "<div class='a'>"+rtnEntCntntsAditDtail5[i].addCntnt+"</div>";
		                    }
		                    ivCeo += "</div>";
		                } 
	                }else{
						$("#ceoTab").hide();
					}
	                $(".ivCeo").html(ivCeo);
	                //인사담당자
	                var ivMngPhoto = ENT_CNTNTS.prsnlmngImageSave;
	                if(ivMngPhoto != null && ivMngPhoto != ""){
	                	ivMngPhoto = "<img src='"+imagePath+ENT_CNTNTS.prsnlmngImageSave+"' alt='인사담당자'>";
	                }
	                $(".ivMngPhoto").html(ivMngPhoto);
	                
	                var rtnEntCntntsAditDtail6 = obj.rtnEntCntntsAditDtail6
	                var ivMng = "";
	                if(rtnEntCntntsAditDtail6 != null && rtnEntCntntsAditDtail6 != ""){	                
		                for(var i=0; i<rtnEntCntntsAditDtail6.length; i++){
		                	ivMng += "<div>";
		                    if(rtnEntCntntsAditDtail6[i].addTitle != null && rtnEntCntntsAditDtail6[i].addTitle != ""){
		                    	ivMng += "<div class='q'>"+rtnEntCntntsAditDtail6[i].addTitle+"</div>";
		                    }
		                    if(rtnEntCntntsAditDtail6[i].addCntnt != null && rtnEntCntntsAditDtail6[i].addCntnt != ""){
		                    	ivMng += "<div class='a'>"+rtnEntCntntsAditDtail6[i].addCntnt+"</div>";
		                    }
		                    ivMng += "</div>";
		                } 
	                }else{
						$("#mngTab").hide();
					}
	                $(".ivMng").html(ivMng);
	                
	                //재직자
	                var ivEmpPhoto = ENT_CNTNTS.incmbImageSave;
	                if(ivEmpPhoto != null && ivEmpPhoto != ""){
	                	ivEmpPhoto = "<img src='"+imagePath+ENT_CNTNTS.incmbImageSave+"' alt='인사담당자'>";
	                }
	                $(".ivEmpPhoto").html(ivEmpPhoto);
	                
	                var rtnEntCntntsAditDtail7 = obj.rtnEntCntntsAditDtail7
	                var ivEmp = "";
	                if(rtnEntCntntsAditDtail7 != null && rtnEntCntntsAditDtail7 != ""){	                
		                for(var i=0; i<rtnEntCntntsAditDtail7.length; i++){
		                	ivEmp += "<div>";
		                    if(rtnEntCntntsAditDtail7[i].addTitle != null && rtnEntCntntsAditDtail7[i].addTitle != ""){
		                    	ivEmp += "<div class='q'>"+rtnEntCntntsAditDtail7[i].addTitle+"</div>";
		                    }
		                    if(rtnEntCntntsAditDtail7[i].addCntnt != null && rtnEntCntntsAditDtail7[i].addCntnt != ""){
		                    	ivEmp += "<div class='a'>"+rtnEntCntntsAditDtail7[i].addCntnt+"</div>";
		                    }
		                    ivEmp += "</div>";
		                } 
	                }else{
						$("#empTab").hide();
					}
	                $(".ivEmp").html(ivEmp);
	                
	                //채용기초정보--------------------------------------
	                //채용절차
	                var rtnEntCntntsAditDtail8 = obj.rtnEntCntntsAditDtail8 
	                var recruitProcess = "";
	                if(rtnEntCntntsAditDtail8 != null){
		                for(var i=0; i<rtnEntCntntsAditDtail8.length; i++){
							recruitProcess += "<div>";
		                	if(rtnEntCntntsAditDtail8[i].addTitle != null && rtnEntCntntsAditDtail8[i].addTitle != ""){
		                    	recruitProcess += "<h4>"+rtnEntCntntsAditDtail8[i].addTitle+"</h4>";
		                    } 
		                	if(rtnEntCntntsAditDtail8[i].addCntnt != null && rtnEntCntntsAditDtail8[i].addCntnt != ""){
		 	                    recruitProcess += "<p class=\"step_txt\">"+rtnEntCntntsAditDtail8[i].addCntnt+"</p>";
		                    } 
							recruitProcess += "</div>";
		                }  
	                }
	                $(".recruitProcess").html(recruitProcess);

	                // 자소서 문항별 가이드
                    var rtnEntCntntsAditDtail9 = obj.rtnEntCntntsAditDtail9;
                    var guide = "";

                    if (rtnEntCntntsAditDtail9 != null) {
                        for (var i = 0; i < rtnEntCntntsAditDtail9.length; i++) {
                            guide += '<div class="item">';

                            if (rtnEntCntntsAditDtail9[i].addTitle != null && rtnEntCntntsAditDtail9[i].addTitle != "") {
                            guide += '<div class="q">' + rtnEntCntntsAditDtail9[i].addTitle + '</div>';
                            }

                            if (rtnEntCntntsAditDtail9[i].addCntnt != null && rtnEntCntntsAditDtail9[i].addCntnt != "") {
                            guide += '<div class="a">' + rtnEntCntntsAditDtail9[i].addCntnt + '</div>';
                            }

                            guide += '</div>'; // item div를 루프 안에서 닫습니다.
                        }
                    }

                    $(".guide_wrap").html(guide);
	                
	                //최근 면접질문
	                var rtnEntCntntsAditDtail10 = obj.rtnEntCntntsAditDtail10 
	                var recentQ = "";
	                if(rtnEntCntntsAditDtail10 != null){
		                for(var i=0; i<rtnEntCntntsAditDtail10.length; i++){
		                	if(rtnEntCntntsAditDtail10[i].addTitle != null && rtnEntCntntsAditDtail10[i].addTitle != ""){
		                		recentQ += "<li>"+rtnEntCntntsAditDtail10[i].addTitle+"</li>";
		                    } 
		                }  
	                }
	                $(".rq_text").html(recentQ);
	                
	                //면접꿀팁
	                var rtnEntCntntsAditDtail11 = obj.rtnEntCntntsAditDtail11;
                    var interviewTip = "";

                    if (rtnEntCntntsAditDtail11 != null) {
                        for (var i = 0; i < rtnEntCntntsAditDtail11.length; i++) {
                            // item div를 루프 내에서 시작
                            interviewTip += "<div class='item'>";

                            if (rtnEntCntntsAditDtail11[i].addTitle != null && rtnEntCntntsAditDtail11[i].addTitle != "") {
                            interviewTip += "<div class='q'>" + rtnEntCntntsAditDtail11[i].addTitle + "</div>";
                            }

                            if (rtnEntCntntsAditDtail11[i].addCntnt != null && rtnEntCntntsAditDtail11[i].addCntnt != "") {
                            interviewTip += "<div class='a'>" + rtnEntCntntsAditDtail11[i].addCntnt + "</div>";
                            }

                            // item div를 루프 내에서 닫음
                            interviewTip += "</div>";
                        }
                    }

                    $(".interview_tip_wrap").html(interviewTip);
	                
	                //가산점 요인
	                var rtnEntCntntsAditDtail12 = obj.rtnEntCntntsAditDtail12;
					var addPoint = "";

					if (rtnEntCntntsAditDtail12 != null) {
						for (var i = 0; i < rtnEntCntntsAditDtail12.length; i++) {
							addPoint += "<li>";

							if (rtnEntCntntsAditDtail12[i].addTitle != null && rtnEntCntntsAditDtail12[i].addTitle != "") {
							addPoint += "<strong class='tit'>" + rtnEntCntntsAditDtail12[i].addTitle + "</strong>";
							}

							if (rtnEntCntntsAditDtail12[i].addCntnt != null && rtnEntCntntsAditDtail12[i].addCntnt != "") {
							addPoint += "<p class='desc'>" + rtnEntCntntsAditDtail12[i].addCntnt + "</p>";
							}
							addPoint += "</li>";
						}
					}

					$(".add_point_wrap").html(addPoint);
	                
	                //최근 입사자 합격스팩
	                var rtnEntCntntsAditDtail13 = obj.rtnEntCntntsAditDtail13;
                    var spec = "";

                    if (rtnEntCntntsAditDtail13 != null) {
                        for (var i = 0; i < rtnEntCntntsAditDtail13.length; i++) {
                            // <li> 태그를 루프 내에서 시작
                            spec += "<li>";

                            if (rtnEntCntntsAditDtail13[i].addTitle != null && rtnEntCntntsAditDtail13[i].addTitle != "") {
                            spec += "<strong class='tit'>" + rtnEntCntntsAditDtail13[i].addTitle + "</strong>";
                            }

                            if (rtnEntCntntsAditDtail13[i].addCntnt != null && rtnEntCntntsAditDtail13[i].addCntnt != "") {
                            spec += "<p class='desc'>" + rtnEntCntntsAditDtail13[i].addCntnt + "</p>";
                            }

                            // </li> 태그를 루프 내에서 닫음
                            spec += "</li>";
                        }
                    }

                    $(".spec_wrap").html(spec);
	                
	                //현직자 복지후기---
	                //소속부서
	                var incmbDept = ENT_CNTNTS.incmbDept;
					$(".incmbDept").html(incmbDept);
	                //이름
	                var incmbNm = ENT_CNTNTS.incmbNm;
					$(".incmbNm").html(incmbNm);
	                //후기
	                var incmbReview = ENT_CNTNTS.incmbReview;
					$(".incmbReview").html(incmbReview);	   
	                
	                //기업컨텐츠 이미지----------------------------
	                //기업컨텐츠 IMG
	                
	                //내/외부사진
	                var rtnEntCntntsAditDtail14 = obj.rtnEntCntntsAditDtail14 
	                var comPic = "";
	                if(rtnEntCntntsAditDtail14 != null){
		                //comPic += "<ul>";
		                for(var i=0; i<rtnEntCntntsAditDtail14.length; i++){
		                    if(rtnEntCntntsAditDtail14[i].imageSave != null && rtnEntCntntsAditDtail14[i].imageSave != ""){
		                    	comPic += "<li><img src='"+imagePath+rtnEntCntntsAditDtail14[i].imageSave+"' alt='내/외부사진'></li>";
		                    } 
		                }  
		                //comPic += "</ul>";
	                }
	                $(".comPic").html(comPic);
	                
	                //사업영역----------------------------------
	                //주요사업영역
	                var rtnEntCntntsAditDtail3 = obj.rtnEntCntntsAditDtail3
	                var bizDivStr = "";
	                if(rtnEntCntntsAditDtail3 != null){
	                	
	                    for(var i=0; i<rtnEntCntntsAditDtail3.length; i++){
	                    	bizDivStr += "<div class='item'>";
	                    	 	if(rtnEntCntntsAditDtail3[i].imageSave != null && rtnEntCntntsAditDtail3[i].imageSave != ""){
	                    			bizDivStr += "<img src='"+imagePath+rtnEntCntntsAditDtail3[i].imageSave+"' alt='"+rtnEntCntntsAditDtail3[i].addTitle+"'>";
	                    	 	}
		                        if(rtnEntCntntsAditDtail3[i].addTitle != null && rtnEntCntntsAditDtail3[i].addTitle != ""){
		                        	bizDivStr += "<h4>"+rtnEntCntntsAditDtail3[i].addTitle+"</h4>";
		                        }
		                        if(rtnEntCntntsAditDtail3[i].addCntnt != null && rtnEntCntntsAditDtail3[i].addCntnt != ""){
		                        	bizDivStr += "<p>"+rtnEntCntntsAditDtail3[i].addCntnt+"</p>"
		                        }
	                       bizDivStr += "</div>";
	                    }
	                    
	                }   
	                $(".bizDiv").html(bizDivStr);
	                
	                //주요상품
	                var rtnEntCntntsAditDtail4 = obj.rtnEntCntntsAditDtail4
	                var productStr = "";
	                if(rtnEntCntntsAditDtail4 != null){
	                	
	                    for(var i=0; i<rtnEntCntntsAditDtail4.length; i++){
	                    	productStr += "<div class='item'>";
	                    	 	if(rtnEntCntntsAditDtail4[i].imageSave != null && rtnEntCntntsAditDtail4[i].imageSave != ""){
	                    	 		productStr += "<div class='thumb'><img src='"+imagePath+rtnEntCntntsAditDtail4[i].imageSave+"' alt='"+rtnEntCntntsAditDtail4[i].addTitle+"'></div>";
	                    	 	}
	                    			productStr += "<div class='info'>";
		                        if(rtnEntCntntsAditDtail4[i].addTitle != null && rtnEntCntntsAditDtail4[i].addTitle != ""){
		                        	productStr += "<h4>"+rtnEntCntntsAditDtail4[i].addTitle+"</h4>";
		                        }
		                        if(rtnEntCntntsAditDtail4[i].addCntnt != null && rtnEntCntntsAditDtail4[i].addCntnt != ""){
		                        	productStr += "<p>"+rtnEntCntntsAditDtail4[i].addCntnt+"</p>"
		                        }
		                        productStr += "</div>";
		                        productStr += "</div>";
	                    }
	                    
	                }   
	                $(".product").html(productStr);
	          		 
	                
				}else{
					
				}
				
				//옵션
				//optionSet();
			}
		)
		,error			: (
			function(errMsg) {
				console.log("불러오기를 실패 했습니다.")
			}
		)
    });

}
</script>