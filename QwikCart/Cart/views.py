from django.shortcuts import render
from .models import Prod, Contact, Orders, OrderUpdate
import json
from math import ceil
from django.http import HttpResponse,JsonResponse 
# Create your views here.
def index(request):
    allProds = []
    catprods = Prod.objects.values('category', 'id')
    cats = {item['category'] for item in catprods}
    for cat in cats:
        product = Prod.objects.filter(category = cat)
        n = len(product)
        nSlides = n//4 + ceil((n/4) - n//4)
        allProds.append([product, range(1,nSlides), nSlides])
    params = {'allProds':allProds}
    return render(request, 'Cart/index.html',params)

def about(request):
    return render(request, 'Cart/about.html')

def contact(request):
    thanks = False
    if request.method == 'POST':
        name = request.POST.get('name','')
        email = request.POST.get('email','')
        phone = request.POST.get('phone','')
        description = request.POST.get('description','')
        contact = Contact(name = name, email = email, phone = phone, description = description)
        contact.save()
        thanks = True
    return render(request, 'Cart/contact.html')

def tracker(request):
    if request.method == "POST":
        orderId = request.POST.get('orderId','')
        email = request.POST.get('email','')
        try:
            order = Orders.objects.filter(order_id=orderId, email=email)
            if len(order)>0:
                update = OrderUpdate.objects.filter(order_id = orderId)
                updates = []
                for item in update:
                    updates.append({'text': item.update_desc, 'time': item.timestamp})
                    response = json.dumps({"status": "success", "updates": updates, "items_json": order[0].items_json}, default=str)
                return HttpResponse(response)
            else:
                return HttpResponse({"status":"noitem"})
        except Exception as e:
            return HttpResponse({"status":"error"})
    return render(request, 'Cart/tracker.html')

def searchMatch(query, item):
    if query in item.desc.lower() or query in item.product_name.lower() or query in item.category.lower() or query in item.subcategory.lower() :
        return True
    else:
        return False

def search(request):
    query = request.GET.get('search')
    allProds = []
    catprods = Prod.objects.values('category', 'id')
    cats = {item['category'] for item in catprods}
    for cat in cats:
        prodtemp = Prod.objects.filter(category=cat)
        product = [item for item in prodtemp if searchMatch(query, item)]

        n = len(product)
        nSlides = n // 4 + ceil((n / 4) - (n // 4))
        if len(product) != 0:
            allProds.append([product, range(1, nSlides), nSlides])
    params = {'allProds': allProds, "msg": ""}
    if len(allProds) == 0 or len(query)<4:
        params = {'msg': "Please make sure to enter relevant search query"}
    return render(request, 'Cart/search.html',params)

def productView(request, pid):
    product = Prod.objects.filter(id = pid)
    return render(request, 'Cart/productView.html', {'product':product[0]})

def checkout(request):
    if request.method == "POST":
        items_json = request.POST.get('items_json','')
        amount = request.POST.get('amount','')
        name = request.POST.get('name','')
        email = request.POST.get('email','')
        address = request.POST.get('address1','') + " " + request.POST.get('address2','')
        city = request.POST.get('city','')
        state = request.POST.get('state','')
        zip_code = request.POST.get('zip_code','')
        phone = request.POST.get('phone','')

        order = Orders(items_json = items_json, amount = amount, name = name, email = email, address = address, city = city, state = state, zip_code = zip_code, phone = phone)

        order.save()

        update = OrderUpdate(order_id = order.order_id, update_desc = "The order has been placed")

        update.save()

        thanks = True
        id = order.order_id
        return render(request, 'Cart/checkout.html', {'thanks':thanks, 'id':id})
    return render(request, 'Cart/checkout.html')

