
var clam208MathLib = function(){
    var range=0;

    function init(rangeVal){
        range = rangeVal
    }
    function standardSamplePopulation(){
        var sum=(total,value)=>{return total+value}
        var mean = range.reduce(sum)/range.length;
        var squaredDifferences = range.map(value=> Math.abs(Math.pow(value-mean,2)))
        var squareMeans = squaredDifferences.reduce(sum)/range.length
        return Math.sqrt(squareMeans)
    }
    function standardPopulationDeviation(){
        var sum=(total,value)=>{return total+value}
        var mean = range.reduce(sum)/range.length;
        var squaredDifferences = range.map(value=> Math.abs(Math.pow(value-mean,2)))
        var sqrtlength= squaredDifferences.length-1
        var squareMeans = squaredDifferences.reduce(sum)/sqrtlength
        return Math.sqrt(squareMeans)
        }
        return{
            setStandardDeviation:function(){
                var range = document.getElementById("range").value
                var rangeArr= range.split(",").map(Number)
                return init(rangeArr)
            },
            getStandarDeviation:function(){
                var radios = document.getElementsByName('optradio');
                var STD= 0
                for (var i = 0, length = radios.length; i < length; i++){
                if (radios[1].checked){       
                STD = standardPopulationDeviation();
                 }
                 if (radios[0].checked){       
                 STD = standardSamplePopulation();
                    }
                }
                document.getElementById("STD").innerHTML= STD
            }
        }
}()




//console.log(standardDeviation("9,2,5,4,12,7"))
