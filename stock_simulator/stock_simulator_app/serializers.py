from django.db.models import Q  # for queries
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import UserProfile
from django.core.exceptions import ValidationError


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['first_name'], validated_data['last_name'],
                                        validated_data['username'], validated_data['email'],
                                        validated_data['password'])

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class UserLogoutSerializer(serializers.ModelSerializer):
    status = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        user = None
        try:
            if not user.ifLogged:
                raise ValidationError("User is not logged in.")
        except Exception as e:
            raise ValidationError(str(e))
        user.ifLogged = False
        user.save()
        data['status'] = "User is logged out."
        return data

    class Meta:
        model = UserProfile
        fields = (
            'status',
        )
