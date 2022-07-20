var datos;
var uriServer = "";
	
function CallService()
{
    if (uriServer != "")
    {
        $.ajax({
            url: uriServer,
            type: "get",
            dataType: "json",
            success: OnSuccess,
            error: OnError
        });
    }
    return false;
}