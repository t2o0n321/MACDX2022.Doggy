export function drawStatusText(context, status){
    context.font = '30px Gochi Hand';
    context.fillText(`Last Input: ${status}`, 10, 30);
}