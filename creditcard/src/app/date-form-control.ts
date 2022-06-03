import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(
    value: any,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void {
    if (value == null) {
      super.setValue('', {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.match(/[^0-9|\/]/gi) || value.length > 5) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length == 2 && this.value.length == 3) {
      super.setValue(value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length == 2) {
      super.setValue(`${value}/`, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    super.setValue(value, {
      ...options,
      emitModelToViewChange: true,
    });
  }
}
