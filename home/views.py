from django.shortcuts import render

# Create your views here.

def home(request):
    context = {'title': 'Home | SSCEPlus - Suitable for Senior Secondary School Students Preparing for Certificate Examinations.'}
    return render(request, 'home\index.html', context)

def subjects(request):
    context = {'title': 'Subjects | SSCEPlus - Suitable for Senior Secondary School Students Preparing for Certificate Examinations.'}
    return render(request, 'home\subjects.html', context)