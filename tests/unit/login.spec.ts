import CandidateModalLogin from "@/components/molecules/candidate/CandidateModalLogin.vue";
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
});
