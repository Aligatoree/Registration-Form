<template>
  <form class="info section" @submit.prevent="submit">
    <!-- Общая информация -->
    <template>
      <div :class="{ error: $v.info.surname.$error }">
        <h2>Фамилия*</h2>
        <input
          v-model.trim="$v.info.surname.$model"
          type="text"
          placeholder="Иванов"
        />
      </div>
      <div :class="{ error: $v.info.name.$error }">
        <h2>Имя*</h2>
        <input
          v-model.trim="$v.info.name.$model"
          type="text"
          placeholder="Иван"
        />
      </div>
      <div>
        <h2>Отчество</h2>
        <input
          v-model.trim="info.patronymic"
          type="text"
          placeholder="Иванович"
        />
      </div>
      <div :class="{ error: $v.info.birth.$error }">
        <h2>Дата рождения*</h2>
        <input
          v-model="$v.info.birth.$model"
          type="date"
          min="1920-01-01"
          max="2022-01-01"
        />
      </div>
      <div :class="[notPhone() ? 'error' : '']">
        <h2>Номер телефона*</h2>
        <input
          v-model.trim="$v.info.phone.$model"
          @input="notPhone"
          type="tel"
          placeholder="79991234567"
        />
        <p class="typo__p" v-if="info.phone.length !== 11">
          Номер телефона должен содержать 11 цифр. Сейчас их
          {{ info.phone.length }}
        </p>
        <p class="typo__p" v-if="info.phone[0] !== '7'">
          Номер телефона должен начинаться на 7
        </p>
      </div>
      <div class="check">
        <h2>Пол</h2>
        <input v-model="info.gender" type="radio" value="male" />
        <label for="male">Мужской</label>
        <input v-model="info.gender" type="radio" value="female" />
        <label for="female">Женский</label>
      </div>
      <div :class="{ error: $v.info.group.$error }" class="check">
        <h2>Группа клиентов*</h2>
        <input type="checkbox" value="Vip" v-model="info.group" />
        <label for="vip">VIP</label>
        <input type="checkbox" value="Problem" v-model="info.group" />
        <label for="problem">Проблемные</label>
        <input type="checkbox" value="Oms" v-model="info.group" />
        <label for="oms">ОМС</label>
      </div>
      <div>
        <h2>Лечащий врач</h2>
        <select name="group" v-model="info.doctor">
          <option v-for="doc in doctors" :key="doc">{{ doc }}</option>
        </select>
      </div>
      <div class="sms">
        <input v-model="info.sms" type="checkbox" />
        <label for="sms">Не отправлять SMS</label>
      </div>
    </template>

    <!-- Адрес -->
    <template>
      <div class="hiddenTab">
        <button
          type="button"
          :class="{ rotate: adressOn }"
          @click="adressOn = !adressOn"
        >
          ▼
        </button>
        <h2 :class="{ error: $v.adress.city.$error }">Адрес</h2>
      </div>
      <div v-if="adressOn">
        <div>
          <h2>Индекс</h2>
          <input
            v-model.trim="adress.index"
            type="text"
            id="index"
            placeholder="190000"
          />
        </div>
        <div>
          <h2>Страна</h2>
          <input
            v-model.trim="adress.country"
            type="text"
            id="country"
            placeholder="Россия"
          />
        </div>
        <div>
          <h2>Область</h2>
          <input
            v-model.trim="adress.region"
            type="text"
            id="region"
            placeholder="Московская"
          />
        </div>
        <div :class="{ error: $v.adress.city.$error }">
          <h2>Город*</h2>
          <input
            v-model.trim="$v.adress.city.$model"
            type="text"
            id="city"
            placeholder="Москва"
          />
        </div>
        <div>
          <h2>Улица</h2>
          <input
            v-model.trim="adress.index"
            type="text"
            id="index"
            placeholder="Ленина"
          />
        </div>
        <div>
          <h2>Дом</h2>
          <input
            v-model.trim="adress.index"
            type="text"
            id="index"
            placeholder="144"
          />
        </div>
      </div>
    </template>

    <!-- Паспорт -->
    <template>
      <div class="hiddenTab">
        <button
          type="button"
          :class="{ rotate: passportOn }"
          @click="passportOn = !passportOn"
        >
          ▼
        </button>
        <h2
          :class="{
            error: $v.passport.document.$error || $v.passport.date.$error,
          }"
        >
          Паспорт
        </h2>
      </div>
      <div v-if="passportOn">
        <div :class="{ error: $v.passport.document.$error }">
          <h2>Тип документа*</h2>
          <select v-model="passport.document">
            <option v-for="type in documents" :key="type">{{ type }}</option>
          </select>
        </div>
        <div>
          <h2>Серия</h2>
          <input
            v-model.trim="passport.series"
            type="text"
            placeholder="4321"
          />
        </div>
        <div>
          <h2>Номер</h2>
          <input
            v-model.trim="passport.number"
            type="text"
            placeholder="654321"
          />
        </div>
        <div>
          <h2>Кем выдан</h2>
          <input v-model.trim="adress.index" type="text" placeholder="Ленина" />
        </div>
        <div :class="{ error: $v.passport.date.$error }">
          <h2>Дата выдачи*</h2>
          <input
            v-model="$v.passport.date.$model"
            type="date"
            min="1991-12-25"
            max="2022-01-01"
          />
        </div>
      </div>
    </template>

    <!-- Кнопка подтверждения -->
    <div class="submit">
      <button
        class="button"
        type="submit"
        :disabled="submitStatus === 'PENDING'"
      >
        Зарегистрироваться
      </button>
      <p class="typo__p" v-if="submitStatus === 'OK'">
        Регистрация прошла успешно!
      </p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Заполните обязательные поля!
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Регистрация...</p>
    </div>
  </form>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      info: {
        surname: "",
        name: "",
        patronymic: "",
        birth: "",
        phone: "",
        gender: "",
        group: [],
        doctor: "",
        sms: "",
      },
      adress: {
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        building: "",
      },
      passport: {
        document: "",
        series: "",
        number: "",
        issued: "",
        date: "",
      },

      documents: ["Паспорт", "Свидетельство о рождении", "Вод. удостоверение"],
      doctors: ["Иванов", "Захаров", "Чернышева"],
      adressOn: false,
      passportOn: false,
      submitStatus: null,
    };
  },
  validations: {
    info: {
      surname: { required },
      name: { required },
      birth: { required },
      phone: {
        required,
        maxLength: maxLength(11),
        minLength: minLength(11),
      },
      group: { required },
    },
    adress: {
      city: { required },
    },
    passport: {
      document: { required },
      date: { required },
    },
  },
  methods: {
    notPhone() {
      if (this.submitStatus == null) return false;
      let num = this.info.phone;
      if (num.length == 11 && num[0] == "7") {
        return false;
      } else {
        return true;
      }
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid || this.info.phone[0] !== "7") {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>

<style>
.section {
  width: 90%;
  border: black 1px solid;
  border-radius: 10px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  background-color: rgb(217, 235, 243);
  font-family: Arial;
}
h2 {
  font-size: 24px;
  margin: 0 0 3px 0;
}
p {
  margin: 3px 0 0 0;
  font-size: 12px;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
}
input {
  border: black 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 18px;
  background-color: #fff;
}
.check {
  display: block;
}
.check h2 {
  display: block;
  width: 100%;
}
label {
  margin-right: 10px;
}
select {
  border: black 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 18px;
  background-color: #fff;
}
.button {
  display: block;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 0 10px;
  font-weight: 600;
  letter-spacing: 0.7px;
}
.submit p {
  padding-top: 5px;
  text-align: center;
}
.sms {
  display: block;
}
.sms input {
  margin-right: 10px;
}
.hiddenTab {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;
}
.hiddenTab button {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.rotate {
  transform: rotate(180deg);
}
.error input {
  border: red 1px solid;
  box-shadow: 0 0 4px red;
}
.error h2,
h2.error {
  color: rgb(223, 0, 0);
}
@media (max-width: 500px) {
  h2 {
    font-size: 16px;
  }
  input,
  select {
    font-size: 14px;
  }
}
</style>
