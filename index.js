function name() {
    $(document).scroll(function () {
      var nav = $(".first-container");
      nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });
  }

name();




  function getValue() { 
      let value = $("#name").val();
      let email = $("#email").val();
      let sub = $("#sub").val();
      let mssg = $("#mssg").val();

const person1=new Masterdata(value,email,sub,mssg)
alert(person1.email)
    

} 

  function Masterdata(name,email,sub,mssg){
    this.name=name;
    this.email=email;
    this.sub=sub;
    this.mssg=mssg;
}



$(window).load(function() {
    $('.loader').hide();
  });
