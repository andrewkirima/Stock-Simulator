from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'stock', views.StockViewSet)

urlpatterns = [
    path('account/register', views.UserCreate.as_view()),
    path('', include(router.urls)),
    path('login', views.Login.as_view(), name="login"),
]
