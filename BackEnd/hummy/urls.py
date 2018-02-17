# from django.conf.urls import url
# from rest_framework.urlpatterns import format_suffix_patterns
#
# from .views import IngredientViewSet, StockIngredientViewSet, MealIngredientViewSet, MealViewSet
#
#
# list_params = {
#     'get': 'list',
#     'post': 'create'
# }
# detail_params = {
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# }
# ingredient_list = IngredientViewSet.as_view(list_params)
# ingredient_detail = IngredientViewSet.as_view(detail_params)
#
# stockingredient_list = StockIngredientViewSet.as_view(list_params)
# stockingredient_detail = StockIngredientViewSet.as_view(detail_params)
#
#
# urlpatterns = format_suffix_patterns([
#     url(r'^$', stockingredient_list, name='stockingredient-list'),
#     url(r'^(?P<pk>[0-9]+)/$', stockingredient_detail, name='stockingredient-detail'),
#     url(r'^$', stockingredient_detail, name='stockingredient-detail'),
#     url(r'^(?P<pk>[0-9]+)/$', stockingredient_detail, name='stockingredient-detail'),
# ])