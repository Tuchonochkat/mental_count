from django.shortcuts import render


def main(request):
    return render(request, 'examples/main.html', {})


def block(request):
    return render(request, 'examples/block.html', {})


def snake(request):
    return render(request, 'examples/snake.html', {})
