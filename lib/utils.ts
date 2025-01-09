$(document).ready(function() {

    // Scroll to top button ----------------------------------------------------------
    // When the user scrolls down 20px from the top of the document, show the button
    function scrollFunction() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
          document.getElementById("topper")!.style.display = "block";
        } else {
          document.getElementById("topper")!.style.display = "none";
        }
      }
    window.onscroll = function() {
      scrollFunction()
    };
  
  
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  
    $("#topper").on("click", function() {
      $("html").animate({
        scrollTop: 0
      }, 400);
    });
  
    // tooltips function
    $(function() {
      $('[data-toggle="tooltip"]').tooltip()
    })
  
    // Initally hide the read more div
       $("#read-more").css("display", "none");
  
       // Show more on click
       $("#badge-more").on("click", function() {
  
          // Show/hide the div
          $("#read-more").fadeToggle("fast");
  
          // Change the button
          if ($("#badge-more").text() == "more") {
             $("#badge-more").text("less");
          } else {
             $("#badge-more").text("more");
          }
  
       });
  
       // popover function
       $('[data-toggle="popover"]').popover();
  
       // open all accordion panels for possible rinting
       // $(".expander").on("click", function() {
       //
       //    // Change the button
       //    if ($(".expander").text() == "show all") {
       //       $(".expander").text("hide all");
       //       $(".panel-collapse").addClass("in");
       //       $(".panel-default a").attr("aria-expanded", "true").removeClass("collapsed");
       //    } else {
       //       $(".expander").text("show all");
       //       $(".panel-collapse").removeClass("in");
       //       $(".panel-default a").attr("aria-expanded", "false").addClass("collapsed");
       //    }
       //
       // });
  
       // open all accordion panels for possible printing or close
     $(".expander").on("click", function() {
  
        if ($(".expander").text() === "show all") {
  
          // Change the button text
           $(".expander").text("hide all");
           // show all accordions
           $(".panel-collapse").collapse('show');
  
        } else {
          // Change the button text
           $(".expander").text("show all");
           // hide all accordions
           $(".panel-collapse").collapse('hide');
        }
     });
  
  });


  /* W3Data ver 1.31 by W3Schools.com @ <script src="https://www.w3schools.com/lib/w3data.js"></script>
*/
var w3DataObject = {};
export function w3IncludeHTML(cb: CallableFunction) {
var z: HTMLCollectionOf<Element>, i: number, elmnt: Element, file: string | null, xhttp: XMLHttpRequest;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("w3-include-html");
          w3IncludeHTML(cb);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
}
interface ReadyFunction {
    (): void;
}

//ts-ignore
function w3Http(target: string, readyfunc: ReadyFunction | null, xml: Document | null, method: string = "GET"): void {
    let httpObj: XMLHttpRequest | ActiveXObject | null = null;
    if (window.XMLHttpRequest) {
        httpObj = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        httpObj = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (httpObj) {
        if (readyfunc) {
            if (httpObj instanceof XMLHttpRequest) {
                httpObj.onreadystatechange = readyfunc;
            }
        }
        if (httpObj instanceof XMLHttpRequest) {
            httpObj.open(method, target, true);
            httpObj.send(xml);
        }
    }
}
