$(document).ready(function() {    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    $('#cep').mask('00.000-000', {
        placeholder: '00.000-000'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
                                    
            },
            email: {
                required: true,
                email: true
                                    
            },
            telefone: {
                required: true
                                    
            },
            cpf: {
                required: true
                                    
            },
            endereco: {
                required: true
                                    
            },
            cep: {
                required: true
                                    
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo!',

            email: 'Por favor, insira o seu e-mail!',        
        
        
            telefone: 'Por favor, insira o seu telefone!',
       
        
            cpf: 'Por favor, insira o seu CPF!',
       
        
            endereco: 'Por favor, insira o seu endereço completo!',       
        
            
            cep: 'Por favor, insira o seu CEP!'
        }
    })        
})