$(function(){
    $('#input_calc').click(function(){

        $('#alert1').remove()
        $('#alert2').remove()
        $('#div_weight').css('border-color', 'black').css('border-width', '1px')
        $('#div_height').css('border-color', 'black').css('border-width', '1px')

        if($('#input_weight').val() > 0  && $('#input_height').val() > 0){

            var weight = parseFloat($('#input_weight').val());
            var height = parseFloat($('#input_height').val());
            var ans = weight/(height*height)
            weight = weight.toFixed(2)
            height = height.toFixed(2)
            ans = ans.toFixed(2)
            var ideal_weight_min = (height*height)*18.5
            ideal_weight_min = ideal_weight_min.toFixed(2)
            var ideal_weight_max = (height*height)*24.9
            ideal_weight_max = ideal_weight_max.toFixed(2)

            var imc = 'Seu IMC é ' + String(ans)
            var ideal_weigth_interval = String(ideal_weight_min) + " Kg <= Seu peso ideal <= " + String(ideal_weight_max) + " Kg"
            if(ans<18.5){
                result = 'Está abaixo do peso'
                $('#div_result').css('background-color', 'rgb(150,0,0)')
            }
            else if(ans>=18.5 & ans<=24.9){
                if(ans<18.5*1.05){
                    result = 'Está no peso ideal, mas no limite inferior'
                    $('#div_result').css('background-color', 'rgb(100,150,0)')
                }
                else if(ans>24.9*0.95){
                    result = 'Está no peso ideal, mas no limite superior'
                    $('#div_result').css('background-color', 'rgb(100,150,0)')
                }
                else{
                    result = 'Está no peso ideal'
                    $('#div_result').css('background-color', 'rgb(0,100,0)')
                }
            }
            else if(ans>=25 & ans<=29.9){
                result = 'Está acima do peso'
                $('#div_result').css('background-color', 'rgb(150,0,0)')
            }
            else{
                result = 'Está obeso'
                $('#div_result').css('background-color', 'rgb(255,0,0)')
            }
            $('form').css('display','none')
            $('#weight').text("Peso: " + weight + " Kg")
            $('#height').text("Altura: " + height + " m")
            $('#div_datas').css('display', 'block')
            $('#div_imc').text(imc).css('display', 'block')
            $('#div_result').text(result).css('display', 'block')
            $('#div_ideal_weight').text(ideal_weigth_interval).css('display', 'block')
            $('#input_back').css('display','block')
        }
        else{
            if($('#input_weight').val() <= 0){
                $('#div_weight').css('border-color', 'red').css('border-width', '5px').before('<p id=alert1 style="color:red; font-size:20px">Insira um peso maior que 0</p>')
            }
    
            if($('#input_height').val() <= 0){
                $('#div_height').css('border-color', 'red').css('border-width', '5px').before('<p id=alert2 style="color:red; font-size:20px">Insira uma altura maior que 0</p>')
            }
        }

        })
        $('#input_back').click(function(){
            $('#input_back').css('display','none')
            $('._div_information').css('display', 'none')
            $('form').css('display','block')
            
        })
})
