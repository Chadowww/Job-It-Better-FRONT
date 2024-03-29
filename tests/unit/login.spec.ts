import CandidateModalLogin from "@/components/molecules/candidate/CandidateModalLogin.vue";
import CandidateModalRegister from "@/components/molecules/candidate/CandidateModalRegister.vue";
import { userLogin } from "@/services/user/UserLoginService";
import { mount } from "@vue/test-utils";
import store from "@/store";

jest.mock("@/services/user/UserLoginService.ts");

describe("CandidateModalLogin", () => {
  it("should render", () => {
    const wrapper = mount(CandidateModalLogin, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("Se connecter");
    expect(wrapper.find("button").text()).toBe("Se connecter");
  });

  it("should run login function", async () => {
    const wrapper = mount(CandidateModalLogin, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.find("button").trigger("click");
    expect(userLogin).toHaveBeenCalled();
  });

  it("should show error email", async () => {
    const wrapper = mount(CandidateModalLogin, {
      global: {
        plugins: [store],
      },
    });

    const emailField = wrapper.find("input[type='email']");
    await emailField.setValue("test");

    expect(wrapper.find(".error").text()).toBe("L'email n'est pas valide.");
  });

  it("should show error password", async () => {
    const wrapper = mount(CandidateModalLogin, {
      global: {
        plugins: [store],
      },
    });
    const emailField = wrapper.find("input[type='email']");
    await emailField.setValue("valid.email@example.com");

    const passwordField = wrapper.find("input[type='password']");
    await passwordField.setValue("fw7jzpdr7!");

    expect(wrapper.find(".error").text()).toBe(
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
    );
  });

  it("should change modal", async () => {
    const wrapper = mount(CandidateModalLogin, {
      global: {
        plugins: [store],
      },
    });
    const wrapper2 = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });

    const link = wrapper
      .findAll("a")
      .filter((w) => w.text() === "Pas encore inscrit ?")[0];

    await link.trigger("click");
    expect(wrapper2.exists()).toBe(true);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
