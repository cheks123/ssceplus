from django.shortcuts import render

# Create your views here.

def home(request):
    context = {'title': 'SSCEPlus | Helps Senior Secondary School students  prepare for certificate examinations: WAEC, NECO, UTME, POST UTME.'}
    return render(request, 'home\index.html', context)

def subjects(request):
    context = {'title': 'Subjects | SSCEPlus - Suitable for Senior Secondary School Students Preparing for Certificate Examinations.'}
    return render(request, 'home\subjects.html', context)